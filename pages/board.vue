<template>
  <v-container class="center board">
    <v-row align="right">
      <v-col>
          Баллов : {{$store.state.score}}
      </v-col>
    </v-row>
    <v-row align="center" justify="center" md-6>
      <v-col
        v-for="(col, key) in deck"
        :key="key"
        class="text-center cards-col-grow"
        justify="center"
      >
        <card
          ref="card"
          :show="show"
          :row="Math.floor(col / cardSuitLength)"
          :col="col % cardSuitLength"
          :shirt="shirt"
          @clickToCard="revertCard"
        ></card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import card from '@/components/card'

export default {
  components: { card },
  data() {
    return {
      show: true,
      shirt: false,
      cardSuitLength: 13,
      openCard: 0,
      deck: [],
      openedCard: null
    }
  },
  mounted() {
    // start game
    this.shuffleDeck()
    setTimeout(() => {
      this.shirt = true
    }, 5000)
  },
  methods: {
    shuffleDeck() {
      this.deck = this.shuffle(
        [...Array(9).keys()].concat(
          Array.from({ length: 9 }, (v, k) => k + this.cardSuitLength)
        )
      )
    },

    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },

    revertCard(e) {

      const cardNumber = e[0] * 13 + e[1]
      const indexCard = this.deck.findIndex((el) => el === cardNumber)
      this.$refs.card[indexCard].shirt = false
      this.openCard++

      if (this.openCard === 1) {
        this.openedCard = cardNumber
        return true
      }
      if (this.openCard === 2) {
        // если не таже самая карта
        if (cardNumber !== this.openedCard) {
          // есди карты одинаковые но разных мастей
          if (cardNumber % this.cardSuitLength === this.openedCard % this.cardSuitLength ) {
            this.$refs.card[indexCard].show = false
            const oldIndexCard = this.deck.findIndex(
              (el) => el === this.openedCard
            )
            this.$refs.card[oldIndexCard].show = false
            this.openedCard = null
            this.openCard = 0
            // хз почему не переворачивает обратно
            this.$refs.card.forEach((el) => {
              if (el.show === true) {
                this.$store.state.score++
              }
            })
          }
          // если разные карты
          else {
            setTimeout(() => {
              this.$refs.card.forEach((el) => {
                if (el.show === true) {
                  el.shirt = true
                } else {
                  this.$store.state.score -= 1 && this.$store.state.score > 0
                }
              })
            }, 1000)

            this.openCard = 0
            this.openedCard = null
          }
        }
        // если таже самая карта
        else {
          this.openCard--
        }
      }
      console.log(this.$store.state.score)
    }
  }
}
</script>

<style lang="scss" scoped="true">
.cards-col-grow {
  flex-grow: 0;
}
.board {
  max-width: 1000px;
}
</style>
