<template>
  <v-container class="center board">
    <v-row align="center" justify="center" md-6>
      <v-col
        v-for="( col, key) in deck"
        :key="key"
        class="text-center cards-col-grow"
        justify="center"
        ref="key"
        @click="revertCard(key)"
      >
        <card
          :show="show"
          :row="Math.floor(col / cardSuitLength)"
          :col="col % cardSuitLength"
          :shirt="shirt"

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
      openCard: 0
    }
  },
  computed: {
    deck() {
      return this
        .shuffle([...Array(9).keys()]
          .concat(Array.from({length: 9}, (v, k) => k + this.cardSuitLength))
        )
    }
  },
  mounted() {
    // console.log(this.deck)
    // start game
//        setTimeout(()=>{
//          this.shirt = true
//        },5000)
  },

  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },
    revertCard(e) {
      console.log(123)
      console.log(e)
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
