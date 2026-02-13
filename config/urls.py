from django.contrib import admin
from django.urls import path
from core.views import home  # correct import from your app folder 'core'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # root URL
]
