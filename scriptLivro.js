// Função para obter o parâmetro "titulo" da URL
function obterTituloDaURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('titulo');
}

// Função para carregar o resumo do livro com base no título fornecido na URL
function carregarResumoDoLivro() {
    const titulo = obterTituloDaURL();
    fetch('livros.json')
        .then(response => response.json())
        .then(data => {
            // Verifica se os dados carregados são um array
            if (Array.isArray(data)) {
                // Encontra o livro correspondente ao título
                const livro = data.find(livro => livro.titulo === titulo);
                if (livro) {
                    // Exibe o resumo do livro
                    const titulo = document.getElementById("titulo");
                    titulo.innerHTML = livro.titulo;
                    const autor = document.getElementById("autor");
                    autor.innerHTML = "Autor: " + livro.autor;
                    const genero = document.getElementById("genero");
                    genero.innerHTML = "Gênero: " + livro.genero;
                    const ano_publicacao = document.getElementById("ano_publicacao");
                    ano_publicacao.innerHTML = "Ano de Publicação: " + livro.ano_publicacao;
                    const conteudo = document.getElementById("conteudo");
                    conteudo.innerHTML =  livro.resumo ;
                } else {
                    // Se o livro não for encontrado, exibe uma mensagem de erro
                    const conteudo = document.getElementById("conteudo");
                    conteudo.innerHTML += "<p>Livro não encontrado.</p>";
                    console.table(livro)
                }
            } else {
                // Se os dados carregados não forem um array, exibe uma mensagem de erro
                console.error('Erro ao carregar o arquivo JSON: Os dados não são um array.');
            }
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}

// Chamada da função para carregar o resumo do livro
carregarResumoDoLivro();