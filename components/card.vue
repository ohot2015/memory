<template>
  <v-card class="d-inline-block" :class="show ? '' : 'hide'">
    <div
      :style="
        'background-image: url(' +
          require('@/assets/images/cards.png') +
          '); ' +
          `background-position: ${shiftRight}px ${shiftTop}px; `
      "
      class="card"
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
    shirt: {
      type: Boolean
    },
    debug: {
      type: Number
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
  computed: {
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
    console.log('row -' + this.row, 'coll - ' + this.col, this.debug, Math.ceil((this.debug + 1) / 9))

  },
  mounted() {
    if (this.shirt) {
      this.row = 2
      this.col = 13
    }
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
