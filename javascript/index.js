// =============== ELEMENTOS ===============
const btnArea = document.getElementById("btn-area");
const resultText = document.getElementById("resultText");

// =============== VARIÁVEIS ===============
let cooldown = false;


// Detectar o click nos botões de pedra, papel e tesoura
btnArea.addEventListener("click", event => {
    if (!event.target.matches("button")) return;  // Se não houve click no botão

    if (cooldown) return;  // Se está em cooldown
    
    // Ativa o cooldown
    cooldown = true;

    // Escolhe um valor aleatório para o computador
    let computerAttack = randomResult();

    // Lida com a animação (1 segundo)
    resultText.classList.add("fadeOut");

    setTimeout( () => {
        resultText.textContent = chooseWinner(event.target.value, computerAttack);
        resultText.classList.remove("fadeOut");
        cooldown = false;  // Desativa o cooldown

    }, 1000)
    
    
})

// Retorna um valor aleatório (0 a 2)
function randomResult() {
    return Math.floor(Math.random() * 3);
}

// Escolhe um vencedor
function chooseWinner(playerResult, computerResult) {
    
    // Jogador ganha
    if (isWinner(playerResult, computerResult)) {
        return "Ganhou";
        
    // Computador ganha 
    } else if (isWinner(computerResult, playerResult)) {
        return "Perdeu";
    
    // Empate
    } else {
        return "Velha";

    }
}

// Define se o jogador ganhou comparado com o adversário
function isWinner(currentResult, enemyResult) {

    // Pedra x Tesoura
    if (currentResult == 0 && enemyResult == 2) {
        return true;

    // Papel x Pedra
    } else if (currentResult == 1 && enemyResult == 0) {
        return true;
    
    // Tesoura x Papel
    } else if (currentResult == 2 && enemyResult == 1) {
        return true;
    
    // Perdeu ou Empatou
    } else {
        return false;

    }   
}