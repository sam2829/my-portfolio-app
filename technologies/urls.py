from django.urls import path
from technologies import views

urlpatterns = [
    path('', views.TechnologyList.as_view(), name='technology-list'),
]
