
from __future__ import unicode_literals

from django.db import models

# Model postgresql abound
class Webdata(models.Model):
    fips = models.IntegerField()
    year = models.IntegerField()
    state_name = models.CharField(max_length=50)
    county_name = models.CharField(max_length=50)
    insecticide = models.FloatField()
    herbicide = models.FloatField()
    harvested = models.FloatField()
    price = models.FloatField()
    ag_p = models.FloatField()
    corn_p = models.FloatField()
    shannon = models.FloatField()
    simpson = models.FloatField()
    heatDay = models.FloatField()


