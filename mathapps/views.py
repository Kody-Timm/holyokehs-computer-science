# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

def index(request):
    
    return render(request, 'mathapps/templates/mathapps/index.html', context)
