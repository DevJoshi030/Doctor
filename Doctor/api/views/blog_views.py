from ..models import Contact, Blog, Subscribe

from django.db.models import Q


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializer import AddBlogSerializer, BlogDetailSerializer, \
    BlogListSeriazlizer, CategorySerializer, PageCountSerializer
# Create your views here.


class AddBlog(APIView):

    model = Blog
    serializer_class = AddBlogSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():

            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        title = serializer.data.get("title")
        image = serializer.data.get("image")
        content = serializer.data.get("content")
        tag = serializer.data.get("tag")
        description = serializer.data.get("description")

        slug = ("-").join(title.split(" "))

        new_blog = Blog(title=title, image=image,
                        content=content, tag=tag, slug=slug,
                        description=description)

        new_blog.save()

        return Response({"Success": "Blog Added"},
                        status=status.HTTP_200_OK)


class BlogList(APIView):

    serializer_class = BlogListSeriazlizer
    model = Blog
    MULT = 5
    SUB = 5

    def get(self, request, format=None, *args, **kwargs):

        page = kwargs['page'] * self.MULT

        queryset = Blog.objects.all()[::-1]
        queryset = queryset[page - self.SUB: page]

        data = []

        for entry in queryset:

            data.append(self.serializer_class(entry).data)

        return Response(data={"data": data}, status=status.HTTP_200_OK)


class BlogDetailView(APIView):

    serializer_class = BlogDetailSerializer
    model = Blog

    def get(self, request, format=None, *args, **kwargs):

        slug = kwargs['slug']
        queryset = Blog.objects.filter(slug=slug)

        if not queryset.exists():
            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        blog = queryset[0]

        data = self.serializer_class(blog).data

        return Response(data=data, status=status.HTTP_200_OK)


class PageCount(APIView):

    serializer_class = PageCountSerializer
    DIV = 5

    def get(self, request, format=None, *args, **kwargs):

        category = kwargs['category']

        if category == "getallblogs":

            queryset = Blog.objects.all()[::-1]
        else:
            queryset = Blog.objects.filter(tag=category)[::-1]

        count = len(queryset) // self.DIV + 1

        return Response(data={"count": count}, status=status.HTTP_200_OK)


class GetCategory(APIView):

    serializer_class = CategorySerializer

    def get(self, request, format=None):

        queryset = Blog.objects.all()[::-1]

        categories = {}

        for entry in queryset:

            categories[entry.tag] = categories.setdefault(entry.tag, 0) + 1

        return Response({"categories": list(categories.items())},
                        status=status.HTTP_200_OK)


class BlogCategoryList(APIView):

    serializer_class = BlogListSeriazlizer
    model = Blog
    MULT = 5
    SUB = 5

    def get(self, request, format=None, *args, **kwargs):

        category = kwargs['category']
        page = kwargs['page'] * self.MULT

        queryset = Blog.objects.filter(tag=category)[::-1]

        queryset = queryset[page - self.SUB: page]

        data = []

        for entry in queryset:

            data.append(self.serializer_class(entry).data)

        return Response(data={"data": data}, status=status.HTTP_200_OK)


class BlogSearchList(APIView):

    serializer_class = BlogListSeriazlizer
    model = Blog
    MULT = 5
    SUB = 5

    def get(self, request, format=None, *args, **kwargs):

        search = kwargs['search']
        page = kwargs['page'] * self.MULT

        queryset = Blog.objects.filter(
            Q(title__icontains=search) |
            Q(tag__icontains=search) |
            Q(description__icontains=search))

        queryset = queryset[page - self.SUB: page]

        data = []

        for entry in queryset:

            data.append(self.serializer_class(entry).data)

        return Response(data={"data": data}, status=status.HTTP_200_OK)
