<template>
  <div class="search-wrap">
    <slot name="h-left"></slot>
    <div class="search-block">
      <i class="mintui mintui-search"></i>
      <input type="text" class="in" v-model="searchText" :placeholder="placeHolderIn">
      <span @click="onClear()">
        <svg-icon v-if="searchText" icon="close" :className="'svg-icon-close'"/>
      </span>
    </div>
      <div class="clearText" v-show="searchText" @click.stop="onSearch()">确定</div>
    <slot name="h-right"></slot>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    placeHolderIn: {
      type: String,
      default: '搜索社区内容'
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onClear () {
      this.searchText = ''
      setTimeout(() => {
        this.$emit('on-clear')
      }, 100)
    },
    onSearch () {
      this.$emit('on-search', this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './search.scss';
</style>
