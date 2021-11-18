from django.db.models import fields
from rest_framework import serializers
from .models import Survey, Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('questionniare', 'answer', 'priority', 'surveyid')

class SurveySerializer(serializers.ModelSerializer):
    surveyid = QuestionSerializer(read_only=False)
    class Meta:
        model = Survey
        fields = ('type', 'testname', 'questionCnt', 'target', 'surveyid')
    
