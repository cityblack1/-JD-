from django.conf.urls import url
from projects.views import CategoryView, DetailView

urlpatterns = [
    url(r'^category/(?P<category_id>\d{0,3})', CategoryView.as_view(), name='category'),
    url(r'^detail/(?P<product_id>\d{0,3})', DetailView.as_view(), name='product'),

]
