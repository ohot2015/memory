<template>
  <v-container class="center board"  >
    <v-row align="center" justify="center" md-6>
      <v-col
        v-for="( col, key) in arr"
        :key="key"
        class="text-center cards-col-grow"
        justify="center"
      >
        <card
          :show="show"
          :row="0 "
          :col="col"
          :shirt="shirt"
          :debug="key"
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
    }
  },
  computed: {
    row(key) {
      return Math.round((key + 1) / 9) + this.cardSuit
    },
    arr() {
      return this.shuffle([...Array(9).keys()].concat([...Array(9).keys()]))
    }
  },
  mounted() {
   console.log(this.arr)
    // start game
    //    setTimeout(()=>{
    //      this.shirt = true
    //    },5000)
  },
  created() {

  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },
    randInt(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      const rand = min - 0.5 + Math.random() * (max - min + 1)
      return Math.round(rand)
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
