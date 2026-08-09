import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'keron_backend.settings')
import django

django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
username = 'Ben'
email = 'ben@keron.local'
password = 'Zeed@789!'

user = User.objects.filter(username=username).first()
if user:
    print(f'EXISTS:{user.username}:{user.email}')
else:
    User.objects.create_superuser(username=username, email=email, password=password)
    print('CREATED:Ben:ben@keron.local')
