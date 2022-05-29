from django.urls import path, include
from .views import movieslistview, recommendview, historyview, moviessearchview
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
   path('api/<str:genre>/',movieslistview),
   path('search/<str:search>/',moviessearchview),
   path('recommend/<int:userid>/',recommendview),
   path('history/',historyview),
   path('accounts/login',obtain_auth_token,name='login'),
]