from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse

@api_view(['GET'])
def events_list(request):
    events = [
        {
            "id": 1,
            "name": "ImpactX Hackathon",
            "date": "2025-10-24",
            "date_display": "Oct 24-25, 2025",
            "description": "24-hour innovation challenge at RNS Institute of Technology. Build, prototype and present solutions to real-world problems.",
            "location": "RNSIT",
            "type": "Hackathon"
        }
    ]
    return Response(events)

def home(request):
    return HttpResponse("Welcome to IEEE RNSIT backend!")
