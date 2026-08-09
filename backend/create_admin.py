import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'keron_backend.settings')
import django

django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
username = 'admin'
email = 'admin@keron.local'
password = 'K3ronAdm1n!'

user = User.objects.filter(username=username).first()
if user:
    print(f'EXISTS:{user.username}:{user.email}')
else:
    User.objects.create_superuser(username=username, email=email, password=password)
    print('CREATED:admin:admin@keron.local')
