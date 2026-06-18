from django.shortcuts import render

# Create your views here.
def allproject(request):
    return render(request, 'project/allproject.html')