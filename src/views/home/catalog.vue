<template>
  <div>
    <scroll
      :distance="56"
      :isEnd="isEnd"
      @on-loadTop="loadTop"
      @on-loadBottom="loadBottom"
    >
      <ul>
        <li v-for="(item, index) in lists" :key="'catalog' + index">
          {{ item }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { getList } from '@/api/content'

export default {
  props: ['catalog'],
  data () {
    return {
      page: 0,
      limit: 10,
      lists: [],
      isEnd: false,
      isRepeat: false,
      handle: {}
    }
  },
  watch: {
    catalog (newval, oldval) {
      this.catalog = newval
      this._getList()
      this.init(0)
    }
  },
  mounted () {
    this._getList()
  },
  methods: {
    init () {
      if (typeof this.handle === 'function') {
        this.handle()
      }
      this.isEnd = false
      this.isRepeat = false
      this.lists = []
      this._getList()
    },
    loadTop (end) {
      this.page = 0
      this._getList()
      this.handle = end
    },
    loadBottom (end) {
      this.page++
      this._getList(end)
      this.handle = end
    },
    _getList () {
      if (this.isRepeat) return
      if (this.isEnd) return
      getList({
        catalog: this.catalog,
        page: this.page,
        limit: this.limit,
        sort: 'created'
      }).then(res => {
        // 加入一个请求锁，防止用户多次点击，等待数据返回后，再打开
        this.isRepeat = false
        // 对于异常的判断，res.code 非200，我们给用户一个提示
        // 判断是否lists长度为0，如果为零即可以直接赋值
        // 当Lists长度不为0，后面请求的数据，加入到Lists里面来
        if (res.code === 200) {
          // 判断res.data的长度，如果小于20条，则是最后页
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
        if (typeof this.handle === 'function') this.handle()
      }).catch(err => {
        this.isRepeat = false
        if (err) {
          this.$Toast(err.message)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
