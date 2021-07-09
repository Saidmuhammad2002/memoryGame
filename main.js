document.addEventListener('DOMContentLoaded', ()=>{

    //card options
    const cardArray = [
        {
            name:'1',
            img: './images/1.jpg'
        },
        {
            name:'2',
            img: './images/2.jpg'
        },
        {
            name:'3',
            img: './images/3.jpeg'
        },
        {
            name:'4',
            img: './images/4.png'
        },
        {
            name:'5',
            img: './images/5.jpeg'
        },
        {
            name:'6',
            img: './images/6.jpeg'
        },
        {
            name:'1',
            img: './images/1.jpg'
        },
        {
            name:'2',
            img: './images/2.jpg'
        },
        {
            name:'3',
            img: './images/3.jpeg'
        },
        {
            name:'4',
            img: './images/4.png'
        },
        {
            name:'5',
            img: './images/5.jpeg'
        },
        {
            name:'6',
            img: './images/6.jpeg'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', './images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if ((cardsChosen[0] === cardsChosen[1])&&(optionOneId!=optionTwoId)) {
      cards[optionOneId].setAttribute('src', './images/white.png')
      cards[optionTwoId].setAttribute('src', './images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', './images/blank.png')
      cards[optionTwoId].setAttribute('src', './images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
