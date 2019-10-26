<template>
  <v-container class="center" fluid>
    <v-row v-for="row in 3" :key="row" align="center" justify="center">
      <v-col
        v-for="col in 6"
        :key="col"
        class="text-center cards-col-grow"
        justify="center"
      >
        <card :show="show" :row="row" :col="col" :shirt="shirt"></card>
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
      shirt: true
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped="true">
.cards-col-grow {
  flex-grow: 0;
}
</style>
