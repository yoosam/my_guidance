from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SurveySerializer, QuestionSerializer
from .models import Question, Survey
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

@csrf_exempt
def survey_result(request):
    data = json.loads(request.body)
    score = data['score']
    surveyId = data['surveyId']
    if score >= 0 and score <= 20 :
        return HttpResponse('A')

    elif score >= 21 and score <= 40 :
        return HttpResponse('B')

    else :
        return HttpResponse('C')


