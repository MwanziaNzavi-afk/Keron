from django.urls import path
from . import views

urlpatterns = [
    path("properties/", views.PropertyListAPIView.as_view(), name="property-list"),
    path("properties/<slug:slug>/", views.PropertyDetailAPIView.as_view(), name="property-detail"),
    path("bookings/", views.BookingRequestCreateAPIView.as_view(), name="booking-create"),
]
