import apiService from './apiService.js'
import listCards from '../templates/list.hbs'

const searchForm = document.querySelector(".search-form")
const inputValue = searchForm.querySelector('input[type="text"]')
const loadButton = document.querySelector('.load')
const galleryArea = document.querySelector(".gallery")

class Cards {
    constructor(apiKey) {
        this.query = ''
        this.page = 1
        this.key = apiKey
        this.cards = []
    }

    renderCards() {
        const cards = {items: this.cards}
        galleryArea.innerHTML = listCards(cards)
    }

    addCards() {
        apiService(this.query, this.page, this.key)
        .then(response => {
            if (response.ok)
                return response.json()
            throw new Error("Error fetching data.")
        })
            .then(data => {
                this.cards = this.cards.concat(data.hits)
                this.renderCards()
            })
        .catch(err => console.log(err))
    }

    changePropertiesFind(value) {
        this.query = value
        this.page = 1
        this.cards = []
    }

    changePropertiesLoad() {
        this.page += 1
    }
}

let myCards = new Cards("21312315-f1f0be60f3efa7b19271edd39")

function handleSubmitFind(event) {
    event.preventDefault()
    const input = inputValue.value.trim()
    if (input === '') {
        return alert('Будь ласка, введіть змістовне значення для пошуку!')
    }
    searchForm.reset()
    myCards.changePropertiesFind(input)
    myCards.addCards()
}

function handleSubmitLoad() {
    if (myCards.query === '') {
        return alert('Будь ласка, введіть змістовне значення для пошуку!')
    }
    myCards.changePropertiesLoad()
    myCards.addCards()
    window.scrollTo({ top: 35 + 6000 * myCards.page, left: 0, behavior: 'smooth'})
}

searchForm.addEventListener("submit", handleSubmitFind)
loadButton.addEventListener("click", handleSubmitLoad)