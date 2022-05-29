from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Rating(models.Model):
    userId =models.IntegerField()
    movieId =models.IntegerField()
    rating=models.FloatField()
    timestamp=models.FloatField()

class Movies(models.Model):
    movieId =models.IntegerField()
    title= models.CharField(max_length=500)
    genres= models.CharField(max_length=500)
    
    def __str__(self):
        return self.title

class Usermodel(models.Model):
    userId =models.IntegerField()
    gender= models.CharField(max_length=500)
    age =models.IntegerField()
    occupation= models.IntegerField()
    zipcode= models.IntegerField()

class Link(models.Model):
    movieId =models.IntegerField()
    imdbId =models.IntegerField()
    tmdbId =models.IntegerField()

class History(models.Model):
    userid=models.ForeignKey(User,on_delete=models.CASCADE)
    movieid =models.IntegerField()
    genre=models.CharField(max_length=500)
    rating=models.FloatField()

