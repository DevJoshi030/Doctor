from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.


class Contact(models.Model):

    firstname = models.CharField(max_length=30, null=False)
    lastname = models.CharField(max_length=30, null=False)
    email = models.EmailField(null=False)
    phone = models.CharField(max_length=10, null=False)
    message = models.TextField(null=False)

    def __str__(self):

        return self.firstname


class Blog(models.Model):

    title = models.CharField(max_length=200)
    image = models.CharField(max_length=2000)
    content = models.TextField()
    description = models.TextField(null=True)
    tag = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):

        return self.title


class Subscribe(models.Model):

    email = models.EmailField(null=False, unique=True)

    def __str__(self):

        return self.email


class Comment(models.Model):

    post = models.ForeignKey(to=Blog, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    email = models.EmailField(null=False)
    message = models.TextField(null=False)
    active = models.BooleanField(default=False)
    parent = models.ForeignKey(
        to="self", on_delete=CASCADE, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.post.title + " => " + self.name
