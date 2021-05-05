from django.contrib import admin
from .models import Comment, Contact, Subscribe, Blog

# Register your models here.

admin.site.register(Contact)
admin.site.register(Subscribe)
admin.site.register(Blog)
admin.site.register(Comment)
