from ..models import Blog, Comment


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializer import AddCommentSerializer, GetCommentSerializer


class AddComment(APIView):

    serializer_class = AddCommentSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():

            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        name = serializer.data.get("name")
        email = serializer.data.get("email")
        message = serializer.data.get("message")
        post = serializer.data.get("post")
        comment_type = serializer.data.get("comment_type")
        comment_id = serializer.data.get("comment_id")

        queryset = Blog.objects.filter(slug=post)

        if not queryset.exists():
            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        blog = queryset[0]

        new_comment = None

        if comment_type == "comment":

            new_comment = Comment(name=name, email=email,
                                  message=message, post=blog, parent=None)

        else:
            queryset = Comment.objects.filter(id=comment_id)

            if not queryset.exists():
                return Response({"Error": "Invalid Data"},
                                status=status.HTTP_400_BAD_REQUEST)
            comment = queryset[0]
            new_comment = Comment(name=name, email=email,
                                  message=message, post=blog, parent=comment)

        new_comment.save()

        return Response({"Success": "Comment Added"},
                        status=status.HTTP_200_OK)


class GetComments(APIView):

    serializer_class = GetCommentSerializer

    def get(self, request, format=None, *args, **kwargs):

        slug = kwargs['slug']

        queryset = Blog.objects.filter(slug=slug)

        if not queryset.exists():
            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        blog = queryset[0]

        queryset = Comment.objects.filter(post=blog)

        data = []

        for entry in queryset:

            data.append(self.serializer_class(entry).data)

        return Response(data={"data": data}, status=status.HTTP_200_OK)
