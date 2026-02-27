const btnArea = document.getElementById("btn-area");

function randomResult() {
    return Math.floor(Math.random() * 3);
}


btnArea.addEventListener("click", event => {
    if (!event.target.matches("button")) return;
    
    let computerAttack = randomResult();

    chooseWinner(event.target.value, computerAttack);
    
})


function chooseWinner(playerResult, computerResult) {
    
    if (playerWin(playerResult, computerResult)) {
        window.alert("Você ganhou miserável!");
        
        
    } else if (computerWin(computerResult, playerResult)) {
        window.alert("CHUPA HA!");

    } else {
        window.alert("AFF!");

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