# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from . import views

def index(request):
    
    return render(request, 'index.html', context)
