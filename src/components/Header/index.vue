<template>
  <div class="header" :style="{ zIndex: zIndex, 'background-color': bkColor }">
    <div class="header-left" @click="goback()" v-if="hasBack">
      <slot name="h-left">
        <svg-icon icon="arrow-left" />
        <span class="left-text" v-if="backText">{{ backText }}</span>
      </slot>
    </div>
    <div class="header-content">
      <slot name="h-center">
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="header-right">
      <slot name="h-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: '返回'
    },
    zIndex: {
      type: Number,
      default: 0
    },
    back: {
      type: Function
    },
    bkColor: {
      type: String
    },
    hasBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goback () {
      if (this.back) {
        this.back()
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  z-index: 100;
  font-size: 16px;
  line-height: $header-height;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  .header-content {
    max-width: 60%;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .header-left, .header-right {
    position: absolute;
    top: 0;
    padding: 0 10px;
  }
  .header-left {
    left: 0;
  }
  .header-right {
    right: 0;
  }
}

</style>
