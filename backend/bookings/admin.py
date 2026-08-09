from django.contrib import admin
from .models import BookingRequest, Property

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "badge", "price_1_bed", "price_2_bed", "price_3_bed")
    search_fields = ("title", "location", "badge")
    prepopulated_fields = {"slug": ("title",)}

@admin.register(BookingRequest)
class BookingRequestAdmin(admin.ModelAdmin):
    list_display = ("full_name", "property", "check_in", "check_out", "status")
    list_filter = ("status", "property")
    search_fields = ("full_name", "email", "phone", "property__title")
    readonly_fields = ("created_at", "updated_at")
