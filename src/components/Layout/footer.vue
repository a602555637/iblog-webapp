<template>
  <div>
    <ul class="layout-footer">
      <router-link
        :to="tab.path"
        v-for="(tab, index) in tabs"
        :key="'tabs' + index"
        class="item"
        exact-active-class="active"
      >
        <svg-icon :icon="tab.icon" :class="['svg-icon-' + tab.icon]" />
        <p>{{ tab.name }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      tabs: [
        { name: '首页', icon: 'home', path: '/' },
        { name: '消息', icon: 'msg', path: '/msg' },
        { name: '热门', icon: 'type', path: '/category' },
        { name: '我的', icon: 'person', path: '/center' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
