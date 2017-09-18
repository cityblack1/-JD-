from django.conf.urls import url
from users.views import LoginView, RegisterView, MyJDView

urlpatterns = [
    url(r'^login/', LoginView.as_view(), name='login'),
    url(r'^register/', RegisterView.as_view(), name='register'),
    url(r'^myJD/(?P<user_id>\d+)/$', MyJDView.as_view(), name='myJD'),

]
