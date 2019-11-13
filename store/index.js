import { shuffle } from '@/helpers/helper'

export const state = () => ({
  score: 0,
  cardSuitLength: 9,
  deck: []
})

export const mutations = {
  set(state, { type, items }) {
    state[type] = items
  },
  startGame(state) {
    state.deck.forEach((el) => {
      el.shirt = true
    })
  },
  openCard(state, card) {
    const [row, col] = card
    state.deck.forEach((el) => {
      if (el.row === row && el.col === col) {
        el.shirt = false
      }
    })
  },
  closeCard(state, card) {
    const [row, col] = card
    state.deck.forEach((el) => {
      if (el.row === row && el.col === col) {
        el.shirt = true
      }
    })
  },
  hideWinCard(state, { card, oldCard }) {
    const [row, col] = card
    const [oldRow, oldCol] = oldCard
    state.deck.forEach((el) => {
      if (
        (el.row === row && el.col === col) ||
        (el.row === oldRow && el.col === oldCol)
      ) {
        el.show = false
      }
    })
  },
  winScore(state) {
    state.deck.forEach((el) => {
      if (el.show === true ) {
        state.score++
      }
    })
  },
  emptyScore(state) {
    state.score = 0
  },
  loseScore(state) {
    state.deck.forEach((el) => {
      if (el.show === false) {
        state.score--
      }
    })
    if (state.score < 0) {
      state.score = 0
    }
  }
}



export const getters = {
  getCardSuitLength: state => state.cardSuitLength,
  // getDeck:state => state.deck
  // getScore:state => state.score,
  checkEndGame(state) {
    console.log(state.deck.find((el) => el.show === true) === undefined)
    return state.deck.find((el) => el.show === true) === undefined
  }
}

export const actions = {
  genDeck({ commit }) {
    const deck = []

    for (let i = 0; i < this.getters.getCardSuitLength * 2; i++) {
      deck.push({
        show: true,
        shirt: false,
        col: i % this.getters.getCardSuitLength,
        row: Math.floor(i / this.getters.getCardSuitLength)
      })
    }
    commit('set', { type: 'deck', items: shuffle(deck) })
  }
}
