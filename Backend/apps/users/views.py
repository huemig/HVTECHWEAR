from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import User_Serializer,User_Signup_Serializer, User_Signin_Serializer
# Create your views here.

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class=User_Serializer
    

class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = User_Signup_Serializer
    
class UserSignin(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = User_Signin_Serializer