import { escapeHtml } from './escapeHtml'

export default {
  // eslint-disable-next-line quote-props
  'richtext': {
    bind: function (el, binding, vnode) {
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: function (el, binding, vnode) {
      el.innerHTML = escapeHtml(binding.value)
    }
  }
}
