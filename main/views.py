from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'main/index.html')
def midestbug(request):
    return render(request, 'midestbug/index.html')