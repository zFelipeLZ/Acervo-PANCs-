from django.db import models

class Categoria(models.Model):
    nome = models.CharField(max_length=50)

    def __str__(self):
        return self.nome

class Panc(models.Model):
    nome_comum = models.CharField(max_length=100, verbose_name="Nome Comum")
    nome_cientifico = models.CharField(max_length=100, verbose_name="Nome Científico")
    categoria = models.ForeignKey(Categoria, on_delete=models.PROTECT)
    
    # Dados do Card (acervo.html)
    descricao_curta = models.CharField(max_length=200, help_text="Texto que aparece no card")
    foto_capa = models.ImageField(upload_to='pancs/capas/', verbose_name="Foto do Card")
    
    # Dados Detalhados (page1.html) - Para uso futuro na página de detalhes
    descricao_completa = models.TextField(verbose_name="Descrição Completa", blank=True)
    familia_botanica = models.CharField(max_length=100, blank=True)
    uso_medicinal = models.CharField(max_length=200, blank=True)
    proteina = models.CharField(max_length=50, blank=True, help_text="Ex: 25%")
    video_youtube = models.URLField(blank=True, help_text="Link do vídeo")

    def __str__(self):
        return self.nome_comum

    class Meta:
        verbose_name = "PANC"
        verbose_name_plural = "PANCs"