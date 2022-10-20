<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="加载失败，请点击重试"
      @load="onLoad"
    >
      <van-cell
        v-for="(article, index) in list"
        :key="index"
        :title="article.title"
      />
    </van-list>
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      per_Page: 20,
      error: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      // console.log(0)
      try {
        // console.log(1)
        // 请求获取数据
        const { data } = await getSearchResult({
          page: this.page, // 页码
          per_page: this.per_Page, // 每页大小
          q: this.searchText // 关键词
        })
        // console.log(111)
        // 将数据添加到数组列表中
        const { results } = data.data
        this.list.push(...results)
        // 将本次加载中的 loading 关闭
        this.loading = false
        // 判断时候还有数据，有，则更新获取下一个数据的页码，没有，将加载状态设置为结束
        if (results.length) {
          this.page++
        } else {
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
