from rest_framework import generics
from .models import BookingRequest, Property
from .serializers import BookingRequestSerializer, PropertySerializer

class PropertyListAPIView(generics.ListAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class PropertyDetailAPIView(generics.RetrieveAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    lookup_field = "slug"

class BookingRequestCreateAPIView(generics.CreateAPIView):
    queryset = BookingRequest.objects.all()
    serializer_class = BookingRequestSerializer
