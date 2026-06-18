from django.urls import path
from . import views

urlpatterns = [
    path('', views.allproject, name='allproject'),
]
