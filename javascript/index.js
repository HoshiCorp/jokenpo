const btnArea = document.getElementById("btn-area");
const result = document.getElementById("resultText");

function randomResult() {
    return Math.floor(Math.random() * 3);
}


btnArea.addEventListener("click", event => {
    if (!event.target.matches("button")) return;
    
    let computerAttack = randomResult();

    result.classList.add("fadeOut");

    setTimeout(()=> {
        result.textContent = chooseWinner(event.target.value, computerAttack);
        result.classList.remove("fadeOut");

    }, 1000)
    
    
})


function chooseWinner(playerResult, computerResult) {
    
    if (playerWin(playerResult, computerResult)) {
        return "Ganhou";
        
        
    } else if (computerWin(computerResult, playerResult)) {
        return "Perdeu";

    } else {
        return "Velha";

    }
}


function playerWin(playerResult, computerResult) {
    
    if (playerResult == 0 && computerResult == 2) {
        return true;

    } else if (playerResult == 1 && computerResult == 0) {
        return true;

    } else if (playerResult == 2 && computerResult == 1) {
        return true;

    } else {
        return false;

    }   
}


function computerWin(computerResult, playerResult) {
    
    if (computerResult == 0 && playerResult == 2) {
        return true;

    } else if (computerResult == 1 && playerResult == 0) {
        return true;

    } else if (computerResult == 2 && playerResult == 1) {
        return true;

    } else {
        return false;

    }   
}
console.log(randomResult())