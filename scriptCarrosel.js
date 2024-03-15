let currentIndex = 0; // Índice atual do card visível
const cardsContainer = document.querySelector('.cards-container'); // Seleciona o container dos cards
const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
const cardWidth = cards[0].offsetWidth + 20; // Largura do card + margem direita
const totalCards = cards.length; // Número total de cards

// Função para exibir um card específico
function showCard(index) {
    const offset = -index * cardWidth;
    cardsContainer.style.transform = `translateX(${offset}px)`; // Move os cards horizontalmente
}

// Função para exibir o próximo card
function nextCard() {
    currentIndex++; // Incrementa o índice
    if (currentIndex >= totalCards) { // Verifica se chegou ao último card
        currentIndex = 0; // Volta para o primeiro card
    }
    showCard(currentIndex); // Exibe o card atual
}

// Função para exibir o card anterior
function prevCard() {
    currentIndex--; // Decrementa o índice
    if (currentIndex < 0) { // Verifica se chegou ao primeiro card
        //currentIndex = totalCards - 1; // Volta para o último card
    }
    showCard(currentIndex); // Exibe o card atual
}

// Event listeners para os botões de navegação
document.querySelector('.next-btn').addEventListener('click', nextCard); // Botão próximo
document.querySelector('.prev-btn').addEventListener('click', prevCard); // Botão anterior


