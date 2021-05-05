from .views.comment_views import AddComment, GetComments
from django.urls import path
from .views.common_views import ContactView, SubscribeView, GetSubscribe
from .views.blog_views import AddBlog, BlogCategoryList, BlogDetailView, \
    BlogList, BlogSearchList, \
    GetCategory, PageCount
urlpatterns = [
    path('add-contact/', ContactView.as_view(), name='add-contact'),
    path('add-blog/', AddBlog.as_view(), name="add-blog"),
    path('subscribe/', SubscribeView.as_view(), name='subscribe'),
    path('get-subscribe/', GetSubscribe.as_view(), name='get-subscribe'),
    path('get-blogs/<int:page>/', BlogList.as_view(), name='get-blogs'),
    path('get-blog/<str:slug>/', BlogDetailView.as_view(), name='get-blog'),
    path('get-comments/<str:slug>/',
         GetComments.as_view(), name="get-comments"),
    path('add-comment/', AddComment.as_view(), name="add-comment"),
    path('pagecount/<str:category>/', PageCount.as_view(), name="pagecount"),
    path('get-categories/', GetCategory.as_view(), name="get-categories"),
    path('blog-list-category/<str:category>/<int:page>/',
         BlogCategoryList.as_view(), name="blog-list-category"),
    path('blog-list-search/<str:search>/<int:page>/',
         BlogSearchList.as_view(), name="blog-list-search"),
]
