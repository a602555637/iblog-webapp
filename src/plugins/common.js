import Vue from 'vue'
// import Header from '@/components/Header'
// Vue.component('my-header', Header)
// 动态组件加载
const componentsContext = require.context('@/components', true, /.vue$/)
// const componentsContext = require.context("@/components", true, /.vue$/);

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component).default
  Vue.component(componentConfig.name, componentConfig)
})
