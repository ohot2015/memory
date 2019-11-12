export const mutation = () => ({
  incrementScore(state) {
    state.score++
  },
  decrementScore(state) {
    state.score--
  }
})
