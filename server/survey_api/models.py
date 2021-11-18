from django.db import models


# Create your models here.

class Survey(models.Model):
    type = models.CharField(max_length=40)
    testname = models.CharField(max_length=40)
    questionCnt = models.IntegerField()
    target = models.CharField(max_length=40)
    
    def __str__(self):
        return self.type

class Question(models.Model):
    questionniare = models.TextField()
    answer = models.IntegerField()
    priority = models.IntegerField()
    surveyid = models.IntegerField(primary_key=True)


    def __str__(self):
        return self.questionniare

    
