from django.shortcuts import render
from django.db.models import Q
from .models import Panc

def acervo_view(request):
    query = request.GET.get('q') # Pega o termo digitado na barra de pesquisa
    pancs = Panc.objects.all()

    if query:
        # Filtra por nome comum OU nome científico
        pancs = pancs.filter(
            Q(nome_comum__icontains=query) | 
            Q(nome_cientifico__icontains=query)
        )

    # Pegamos todas as PANCs para preencher o <datalist> de sugestões
    todas_pancs = Panc.objects.all().order_by('nome_comum')

    return render(request, 'acervo.html', {
        'pancs': pancs,
        'sugestoes': todas_pancs
    })