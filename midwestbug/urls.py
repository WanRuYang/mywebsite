from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='midwestbug'),
    url(r'^insecticide1997$', views.getInsecticide97, name='getInsecticide'),
    url(r'^insecticide2002$', views.getInsecticide02, name='getInsecticide'),
    url(r'^insecticide2007$', views.getInsecticide07, name='getInsecticide'),
    url(r'^insecticide2012$', views.getInsecticide12, name='getInsecticide'),
    url(r'^corn1997$', views.getCorn97, name='getCorn'),
    url(r'^corn2002$', views.getCorn02, name='getCorn'),
    url(r'^corn2007$', views.getCorn07, name='getCorn'),
    url(r'^corn2012$', views.getCorn12, name='getCorn'),
    url(r'^diversity1997$', views.getSimpson97, name='getSimpson'),
    url(r'^diversity2002$', views.getSimpson02, name='getSimpson'),
    url(r'^diversity2007$', views.getSimpson07, name='getSimpson'),
    url(r'^diversity2012$', views.getSimpson12, name='getSimpson'),
    url(r'^price1997$', views.getPrice97, name='getPrice'),
    url(r'^price2002$', views.getPrice02, name='getPrice'),
    url(r'^price2007$', views.getPrice07, name='getPrice'),
    url(r'^price2012$', views.getPrice12, name='getPrice'),
    url(r'^heat1997$', views.getHeat97, name='getDegreeDay'),
    url(r'^heat2002$', views.getHeat02, name='getDegreeDay'),
    url(r'^heat2007$', views.getHeat07, name='getDegreeDay'),
    url(r'^heat2012$', views.getHeat12, name='getDegreeDay'),
     ]
