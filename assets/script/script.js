document.addEventListener('DOMContentLoaded', () => {
    // Verificação de segurança: Só roda o código se a galeria existir na página
    const galeria = document.getElementById('galeria-grid');
    if (!galeria) return; 

    const acervo = [
        {
            nome: "Nome da Espécie",
            nomeCientifico: "Nome científico",
            resumo: "Pilar da culinária local, rica em proteínas e essencial na medicina tradicional.",
            imagem: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
            link: "paginas/page1.html"
        },
        {
            nome: "Nome da Espécie",
            nomeCientifico: "Nome científico",
            resumo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
            link: ""
        },
        {
            nome: "Nome da Espécie",
            nomeCientifico: "Nome científico",
            resumo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imagem: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
            link: ""
        }
    ];

    acervo.forEach(planta => {
        const card = document.createElement('article');
        card.className = 'card-peca';
        // Ajuste no caminho da imagem e link para garantir funcionamento
        // Nota: Assumindo que a estrutura de pastas está correta.
        card.innerHTML = `
            <div class="img-container">
                <img src="${planta.imagem}" alt="${planta.nome}">
            </div>
            <div class="conteudo-card">
                <span class="nome-cientifico">${planta.nomeCientifico}</span>
                <h3>${planta.nome}</h3>
                <p>${planta.resumo}</p>
                <a href="${planta.link}" class="btn-detalhes">Ver Detalhes &rarr;</a>
            </div>
        `;
        galeria.appendChild(card);
    });
});