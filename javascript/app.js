const playerChoice = ()=>{
    const buttons = document.querySelectorAll('.selection img');

    for(let button of buttons){
        button.addEventListener('click', ()=>{
            if(button.classList[1] == 'rock'){
                console.log('Rock is clicked!');
            }
            
            else if(button.classList[1] == 'paper')
                console.log('Paper is clicked!');

            else if(button.classList[1] == 'scissor')    
                console.log('Scissor is clicked!');
        });
    }
}

const app = ()=>{
    playerChoice();  
}

app();