from django.contrib import admin
from django.urls import path, include
from green_way import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('', include('account.urls')),
    path('', include('post.urls')),
    path('', include('location.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
