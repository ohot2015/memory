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
      Игра завершена
    </h1>
    <h2 class="my-5">
      Баллов набранно: {{score}}
    </h2>
    <v-btn rounded dark color="#12cdd4" class="my-5" @click="newGame">
      Повторить игру
    </v-btn>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed:{
      ...mapState(['score'])
    },
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
  h1,h2 {
    color: white;
  }
  .wrap-page {
    height: 100%;
  }
</style>
