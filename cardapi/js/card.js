//isNaN() use kokhon hoy 


//button event handler setup
//get input value  by clicking button
//error handling for string value

const main = document.getElementById('main');

const searchButton = () => {
    const inputField = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(inputField.value);
    if(isNaN(inputValue) || inputValue == ''){//isNaN check number or string or other
        // alert('Please enter a number') can use alert() or
        error.innerText = 'Please enter a number';
        inputField.value = '';
        main.innerHTML = '';
    }
    else if(inputValue <= 0) {
        error.innerText ='please enter a positive number';

        inputField.value = '';
        main.innerHTML = '';
    }
    else{
        main.innerHTML = '';
         fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))

         error.innerHTML = '';
         inputField.value = '';
    }
};

const cardsDisplay = (cards) => {
    // cards = cards.cards; 24 line .cards or this line
    // console.log(cards)
    for(const card of cards){
        console.log(card)
        const div = document.createElement('div');
        div.className = 'col-lg-4'
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.value}</h5>
          <p class="card-text">${card.code}</p>
          <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
        </div>
      </div>
        `
        main.appendChild(div);
    }
};

const cardDetails = (code) =>{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
            .then(res => res.json())
            .then(data => {
                const allCards = data.cards;
                // console.log(allCards)
                const singleCard = allCards.find(card => card.code === code)
                // console.log(singleCard)
                const div = document.createElement('div');
                main.innerHTML = '';
                div.innerHTML =`
                <div class="card" style="width: 18rem;">
                    <img src="${singleCard.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${singleCard.value}</h5>
                    <p class="card-text">${singleCard.code}</p>
                    </div>
                </div>
                `
                main.appendChild(div);
            })
}