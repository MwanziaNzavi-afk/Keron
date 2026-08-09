# Keron Backend

This Django backend provides a REST API for property data and booking requests for the Keron Premier Properties frontend.

## Features

- `Property` model with title, slug, location, pricing, badges, and images
- `BookingRequest` model with property, customer details, dates, guest count, pricing, and status
- REST endpoints for listing properties and creating booking requests
- Admin site for managing properties and booking requests
- CORS configured for local Next.js development

## Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## API endpoints

- `GET /api/properties/`
- `GET /api/properties/<slug>/`
- `POST /api/bookings/`

## Next.js integration

Use the `/api/bookings/` endpoint from the frontend to submit booking requests with payloads such as:

```json
{
  "property": 1,
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+254700000000",
  "bedrooms": 2,
  "guests": 2,
  "check_in": "2026-09-10",
  "check_out": "2026-09-15",
  "total_price": 30000
}
```
