from django.contrib import admin
from .models import Panc, Categoria

@admin.register(Panc)
class PancAdmin(admin.ModelAdmin):
    list_display = ('nome_comum', 'nome_cientifico', 'categoria')
    search_fields = ('nome_comum', 'nome_cientifico')

admin.site.register(Categoria)