const player =[];
function displayPlayer(selectPlayer){
    // console.log(selectPlayer);
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';

    for(let i = 0; i<selectPlayer.length; i++){
        const name = player[i];

        const h4 = document.createElement('h6');
        h4.innerHTML = `
        ${i+1}. ${name}   
        `;
        playerList.appendChild(h4);
    }
}


function selectPlayer(element, elementId){
    const playerName = element.parentNode.parentNode.children[0].innerText; 
    if(player.length < 5){
        document.getElementById('selected-player').innerText = player.length+1;
        player.push(playerName);
        displayPlayer(player);             
    }
    else{
        alert('selected player not more than 5') ;
        return;
    }   
    document.getElementById(elementId).setAttribute('disabled', 'true');
    document.getElementById(elementId).style.backgroundColor='gray';
}

function getcost(inputFieldId){
        const costString =document.getElementById(inputFieldId).value;
        const cost = parseFloat(costString);   
        return cost;   
}

document.getElementById('calculate-btn').addEventListener('click', function(){       
    const budgetPerPlayer = getcost('budget-per-player');
    const playerExpense = document.getElementById('player-expense');

    if(isNaN(budgetPerPlayer)){
        alert('enter budget per player cost as a number');
        playerExpense.innerText = '';
        return;
    }
    const totalPlayerExpense = budgetPerPlayer * player.length;
    playerExpense.innerText = totalPlayerExpense;        
     
})

document.getElementById('calculate-total-btn').addEventListener('click', function(){ 
    const playerExpense = parseFloat(document.getElementById('player-expense').innerText);

    const managerCost = getcost('manager-cost');   
    const CoachCost = getcost('coach-cost');
    const PreviousTotal = document.getElementById('total-expense');

    if(isNaN(managerCost) || isNaN(CoachCost) || isNaN(playerExpense)){
        alert('enter manager cost and coach cost as a number');
        PreviousTotal.innerText = '';
        return;
    }
    
    const totalExpense =  playerExpense + managerCost + CoachCost;
    PreviousTotal.innerText = totalExpense;
     
})
