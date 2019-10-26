<template>
  <v-card class="d-inline-block">
    <div
      :style="
        'background-image: url(' +
          require('@/assets/images/cards.png') +
          '); ' +
          `background-position: ${shiftRight}px ${shiftTop}px; `
      "
      class="card"
      :class="show ? '' : 'hide'"
    ></div>
  </v-card>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean
    },
    row: {
      type: Number
    },
    col: {
      type: Number
    },
    shirt:{
      type: Boolean
    }
  },
  data() {
    return {
      // sprite png
      left: 137.7,
      // sprite png
      top: 194,
      test: 1
    }
  },
  computed:{
    shiftRight() {
      if (this.shirt) {
        return -this.left * 13
      }
      return -this.left * this.col
    },
    shiftTop() {
      if (this.shirt) {
        return -this.top * 2
      }
      return -this.top * this.row
    }
  },
  created() {

  },
  mounted() {
    if (this.shirt) {
      this.row = 2
      this.col = 13
    }
    console.log(this.col, this.row)
  }
}
</script>

<style lang="scss" scoped="true">
.hide {
  opacity: 0;
}
.card {
  width: 127px;
  height: 178px;
  background-size: 1600%;
}
</style>
