<template>
  <div
        class="wrap-page d-flex justify-center mb-1 align-center flex-column"
        align="center"
>
  <v-card class="my-5" outlined>
    <v-img
            height="auto"
            width="130"
            class="text-center "
            :src="require('@/assets/images/joker.png')"
    ></v-img>
  </v-card>
  <h1 class="my-5">
    Игра "Memory"
  </h1>
  <v-btn rounded dark color="#12cdd4" class="my-5" @click="newGame">
    Начать игру!
  </v-btn>
</div>
</template>

<script>
export default {
  methods: {
    newGame() {
      this.$router.push({ name: 'board' })
    }
  }
}
</script>
<style lang="scss" scoped="true">
.cards-col-grow {
  flex-grow: 0;
}
h1 {
  color: white;
}
.wrap-page {
  height: 100%;
}
</style>
