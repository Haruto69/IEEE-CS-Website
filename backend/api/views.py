from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse

@api_view(['GET'])
def events_list(request):
    events = [
        {"id": 1, "name": "Hackathon", "date": "2025-09-20"},
        {"id": 2, "name": "Workshop", "date": "2025-09-25"},
    ]
    return Response(events)

def home(request):
    return HttpResponse("Welcome to IEEE RNSIT backend!")