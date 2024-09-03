getAllFrameworks();

// Função criada para minimizar o esforço do lado do frontend
// Ao invés de adicionar cada <img> manualmente
// Criei um for loop para iterar nos assets, e pegar as imagens automáticamente
function getAllFrameworks() {
    const div = document.getElementById('knowledge');

    // Loop para adicionar imagens
    for (let i = 0; i <= 9; i++) {
        // Cria um elemento <img>
        const img = document.createElement('img');

        // Define o caminho da imagem
        img.src = `./assets/linguagem_${i}.png`;
        img.class = 'knowledge_img'

        img.width = 125;
        img.height = 125;

        // Adiciona a imagem à div
        div.appendChild(img);
    }
}