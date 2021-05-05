from rest_framework import serializers
from .models import Comment, Contact, Blog, Subscribe


class ContactSerializer(serializers.ModelSerializer):

    class Meta:

        model = Contact
        fields = ('name', 'email', 'phone', 'message')


class AddBlogSerializer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'content', 'tag', 'description')


class BlogListSeriazlizer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'tag', 'description', 'created_at', 'slug')


class BlogDetailSerializer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'tag', 'description',
                  'created_at', 'slug', 'content')


class PageCountSerializer(serializers.ModelSerializer):

    count = serializers.IntegerField()

    class Meta:

        model = Blog
        fields = ('count')


class SubscribeSerializer(serializers.ModelSerializer):

    email = serializers.EmailField()

    class Meta:

        model = Subscribe
        fields = ('email',)


class CategorySerializer(serializers.ModelSerializer):

    count = serializers.IntegerField()

    class Meta:

        model = Blog
        fields = ('tag', 'count')


class AddCommentSerializer(serializers.ModelSerializer):

    comment_type = serializers.CharField(max_length=8)
    comment_id = serializers.IntegerField()
    post = serializers.CharField(max_length=200)

    class Meta:

        model = Comment
        fields = ('name', 'email', 'post', 'message',
                  'comment_type', 'comment_id')


class GetCommentSerializer(serializers.ModelSerializer):

    class Meta:

        model = Comment
        fields = ('id', 'name', 'message', 'created_at', "parent")
