// countdown to result
const countdown = (count) => {
    const counter = document.querySelector('.counter');
    counter.innerHTML = `<h1>${count}</h1>`;
    count = count - 1;
    if(count >= 0){
        setTimeout(function(){
            countdown(count)
        },
        1000);
    }
}

// winner screen pop up
const winnerScreen = (winner)=>{
    const screen = document.querySelector('.winner-screen');
    screen.classList.add('open');

    // adding data to overlay
    if(winner === 'Draw'){
        screen.innerHTML = `<h1>I's a Draw !</h1>
                        <a href="playground.html" id="play-again">Play Again</a>
                        `;
    }else{
        screen.innerHTML = `<h1>${winner} wins!</h1>
                        <a href="playground.html" id="play-again">Play Again</a>
                        `;
    }

}


// finding winner algorithm
const findTheWinner = (computerMove, playerMove)=>{
    // draw scenario
    if(computerMove === playerMove)
        return 'Draw';

    // computer winning scenario
    else if(computerMove === 'rock' && playerMove === 'scissor')
        return 'Computer';

    else if(computerMove === 'paper' && playerMove === 'rock')
        return 'Computer';

    else if(computerMove === 'scissor' && playerMove === 'paper')
        return 'Computer';

    // player winning scenario
    else if(computerMove === 'scissor' && playerMove === 'rock')
        return 'Player';

    else if(computerMove === 'rock' && playerMove === 'paper')
        return 'Player';

    else if(computerMove === 'paper' && playerMove === 'scissor')
        return 'Player';
}


// computer choice
const computerChoice = () => {
    const min = 1;
    const max=4;

    const choice = Math.floor(Math.random() * (max-min) + min);
    const choices = ['rock', 'paper', 'scissor'];
    
    const computerArea = document.querySelector('.computer-area .choice');
    const h1 = document.querySelector('.computer-area .choice h1');

    const img = document.createElement('img');
    img.src = `assets/images/${choices[choice-1]}.png`;

    computerArea.append(img);
    computerArea.removeChild(h1);

    return choices[choice-1];
}


// starting the game
const startGame = (playerMove) => {
    const playerArea = document.querySelector('.player-area .choice');
    const h1 = document.querySelector('.player-area .choice h1');

    const img = document.createElement('img');
    img.src = `assets/images/${playerMove}.png`;

    playerArea.append(img);
    playerArea.removeChild(h1);


    // computer choice
    const computerMove = computerChoice();
    
    // finding the winner
    const winner = findTheWinner(computerMove, playerMove);

    // calling winner screen
    setTimeout(function(){winnerScreen(winner)}, 1000);
}


// selection given to player to choose 
const playerChoice = ()=>{
    const buttons = document.querySelectorAll('.selection img');

    for(let button of buttons){
        button.addEventListener('click', ()=>{
            // starting the coundown
            countdown(3);
            
            if(button.classList[1] == 'rock')
                // delaying game to start after function
                setTimeout(function(){startGame('rock');}, 3000);
            
            
            else if(button.classList[1] == 'paper')
                // delaying game to start after function
                setTimeout(function(){startGame('paper');}, 3000);

            else if(button.classList[1] == 'scissor')    
                // delaying game to start after function
                setTimeout(function(){startGame('scissor');}, 3000);

        });
    }
}

const app = ()=>{
    playerChoice();  
   
}

app();