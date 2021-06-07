from django.urls import path
from .views import PredictionView, CreatePredictionView

urlpatterns = [
    path('prediction', PredictionView.as_view()),
    path('create-prediction', CreatePredictionView.as_view())
]