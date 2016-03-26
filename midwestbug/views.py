from django.shortcuts import render
from midwestbug.models import Webdata
import csv
import json
import psycopg2
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'midwestbug/report.html')

# query insecticide
def getInsecticide97(request):
    query97 = Webdata.objects.filter(year=1997).values_list('fips', 'insecticide')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getInsecticide02(request):
    query02 = Webdata.objects.filter(year=2002).values_list('fips', 'insecticide')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query02)
    return response    

def getInsecticide07(request):
    query07 = Webdata.objects.filter(year=2007).values_list('fips', 'insecticide')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query07)
    return response    

def getInsecticide12(request):
    query12 = Webdata.objects.filter(year=2012).values_list('fips', 'insecticide')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query12)
    return response    

# query  corn acre planted
def getCorn97(request):
    query97 = Webdata.objects.filter(year=1997).values_list('fips', 'corn_p')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getCorn02(request):
    query97 = Webdata.objects.filter(year=2002).values_list('fips', 'corn_p')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getCorn07(request):
    query97 = Webdata.objects.filter(year=2007).values_list('fips', 'corn_p')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getCorn12(request):
    query97 = Webdata.objects.filter(year=2012).values_list('fips', 'corn_p')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response


# query corn proportion planted
def getPrice97(request):
    query97 = Webdata.objects.filter(year=1997).values_list('fips', 'price')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getPrice02(request):
    query97 = Webdata.objects.filter(year=2002).values_list('fips', 'price')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getPrice07(request):
    query97 = Webdata.objects.filter(year=2007).values_list('fips', 'price')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getPrice12(request):
    query97 = Webdata.objects.filter(year=2012).values_list('fips', 'price')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response


# query simpson diversity index planted
def getSimpson97(request):
    query97 = Webdata.objects.filter(year=1997).values_list('fips', 'simpson')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getSimpson02(request):
    query97 = Webdata.objects.filter(year=2002).values_list('fips', 'simpson')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getSimpson07(request):
    query97 = Webdata.objects.filter(year=2007).values_list('fips', 'simpson')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getSimpson12(request):
    query97 = Webdata.objects.filter(year=2012).values_list('fips', 'simpson')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

# query degree day planted
def getHeat97(request):
    query97 = Webdata.objects.filter(year=1997).values_list('fips', 'heatDay')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getHeat02(request):
    query97 = Webdata.objects.filter(year=2002).values_list('fips', 'heatDay')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getHeat07(request):
    query97 = Webdata.objects.filter(year=2007).values_list('fips', 'heatDay')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response

def getHeat12(request):
    query97 = Webdata.objects.filter(year=2012).values_list('fips', 'heatDay')
    response = HttpResponse(content_type='text/tsv') 
    writer = csv.writer(response, delimiter = '\t')
    writer.writerow(['id', 'rate'])
    writer.writerows(query97)
    return response
