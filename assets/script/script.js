document.addEventListener('DOMContentLoaded', () => {
    
    // Lista de Plantas (Dados)
    const acervo = [
        {
            nome: "Ora-pro-nóbis",
            nomeCientifico: "Pereskia aculeata",
            resumo: "Pilar da culinária local, rica em proteínas e essencial na medicina tradicional.",
            imagem: "https://images.unsplash.com/photo-1627821636750-8b4507024c08?auto=format&fit=crop&q=80&w=400",
            link: "../paginas/page1.html" 
        },
        {
            nome: "Nome Popular",
            nomeCientifico: "Nome Cientifico",
            resumo: "Folhas aveludadas que trazem o sabor do mar para o interior do quilombo.",
            imagem: "https://images.unsplash.com/photo-1667838538740-4246995034c2?auto=format&fit=crop&q=80&w=400",
            link: "#"
        },
        {
            nome: "Nome Popular",
            nomeCientifico: "Nome Cientifico",
            resumo: "Símbolo de resistência, exige maestria no preparo de suas folhas largas.",
            imagem: "https://images.unsplash.com/photo-1594313013289-54d922987a04?auto=format&fit=crop&q=80&w=400",
            link: "paginas/page1.html"
        },
        {
            nome: "Nome Popular",
            nomeCientifico: "Nome Cientifico",
            resumo: "Base do arroz de cuxá, suas folhas ácidas são medicinais e refrescantes.",
            imagem: "https://images.unsplash.com/photo-1596547608826-646e7a239b9c?auto=format&fit=crop&q=80&w=400",
            link: "paginas/page1.html"
        }
    ];

    // Seleciona a DIV do HTML
    const galeria = document.getElementById('galeria-grid');

    // Só executa se a galeria existir na página (evita erro na Home)
    if (galeria) {
        acervo.forEach(planta => {
            const card = document.createElement('article');
            card.className = 'card-peca';
            
            card.innerHTML = `
                <div class="img-container">
                    <img src="${planta.imagem}" alt="${planta.nome}">
                </div>
                <div class="conteudo-card">
                    <span class="nome-cientifico">${planta.nomeCientifico}</span>
                    <h3>${planta.nome}</h3>
                    <p>${planta.resumo}</p>
                    <a href="${planta.link}" class="btn-detalhes">Ver Ficha Técnica &rarr;</a>
                </div>
            `;
            
            galeria.appendChild(card);
        });
    }
});