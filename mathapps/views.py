# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from django.shortcuts import render
from . import views

def index(request):
    return render(request, 'mathapps/index.html')