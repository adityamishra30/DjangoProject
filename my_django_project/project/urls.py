from django.urls import path

#localhost:8080/project
#localhost:8080/project/allproject
# pyrefly: ignore [missing-import]
from . import views

urlpatterns = [
    path('', views.allproject, name='allproject'),
]
