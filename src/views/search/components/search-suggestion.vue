<template>
  <div class="search-suggestion">
    <van-cell icon="search" @click="$emit('search',text)" v-for="(text, index) in suggestions" :key="index">
      <div slot="title" v-html="highlight(text)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
// 按需加载
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestions: []
    }
  },
  computed: {},
  watch: {
    searchText: {
      // debounce
      // 参数一：一个函数
      // 参数二：延迟时间，单位毫秒
      handler: debounce(function (value) {
        this.loadSearchSuggestions(value)
      }, 500),
      //   handler(value) {
      //     this.loadSearchSuggestions(value)
      //   },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    async loadSearchSuggestions(q) {
      try {
        const { data } = await getSearchSuggestions(q)
        this.suggestions = data.data.options
        // console.log(data.data.options)
      } catch (err) {
        this.$toast('数据获取失败，请稍后重试')
      }
    },
    highlight(text) {
      const highlightStr = `<span class="active">${this.searchText}</span>`
      //   根据变量动态创建正则表达式，手动 new RegExp
      // RegExp 正则表达式构造函数
      // 参数一：匹配模式字符串，根据字符串创建正则表达式
      // 参数二：匹配模式
      const reg = new RegExp(this.searchText, 'gi')
      return text.replace(reg, highlightStr)
    }
  }
}
</script>

<style lang="less" scoped>
.search-suggestion {
  /deep/ span.active {
    color: #3296fa;
  }
}
</style>
