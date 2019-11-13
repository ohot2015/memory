<template>
  <v-container class="center board">
    <v-row>
      <v-col>
        <div class="score">Баллов: {{score}}</div>
        <!-- : -->
      </v-col>
    </v-row>
    <v-row align="center" justify="center" md-6>
      <v-col
        v-for="(item, key) in deck"
        :key="key"
        class="text-center cards-col-grow"
        justify="center"
      >
        <card
          ref="card"
          :show="item.show"
          :row="item.row"
          :col="item.col"
          :shirt="item.shirt"
          @clickToCard="revertCard"
        ></card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="cards-col-grow">
        <v-btn rounded dark color="#12cdd4" class="my-5" @click="newGame">
          Сыграть еще раз
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import card from '@/components/card'
export default {
  components: { card },
  data() {
    return {
      openCardCount: 0,
      oldCards: [],
    }
  },
  computed: {
    ...mapState(['deck','score']),
    ...mapGetters(['checkEndGame'])
  },
  created() {
    this.newGame()
  },
  methods: {
    ...mapMutations(['startGame', 'hideWinCard', 'openCard', 'closeCard','winScore','loseScore','emptyScore']),
    newGame(){
      this.$store.dispatch('genDeck')
      this.emptyScore()
      setTimeout(() => {
        this.startGame()
      }, 3000)
    },
    revertCard(card) {
      const [row, col] = card
      this.openCardCount++
      if (this.openCardCount === 1) {
        this.oldCards = card
        this.openCard(card)
        return true
      }
      if (this.openCardCount === 2) {
        const [oldRow, oldCol] = this.oldCards
        // если не таже самая карта
        if (row !== oldRow && col === oldCol) {
          this.openCard(card)
          this.winScore()

          setTimeout(() => {
            this.hideWinCard({ card, oldCard: this.oldCards })
            this.oldCards = []
            this.openCardCount = 0
            if (this.checkEndGame) {
              this.$router.push({ name: 'endGame' })
            }
          }, 700)
        }
        // если карты разные
        else {
          this.openCard(card)
          this.loseScore()
          setTimeout(() => {
            this.closeCard(card)
            this.closeCard(this.oldCards)
            this.openCardCount = 0
            this.oldCards = []
          }, 1700)
        }
      }
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
.score {
  text-align: right;
  color: white;
}
</style>
