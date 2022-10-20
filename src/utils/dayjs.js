import Vue from 'vue'
import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

// 配置使用处理相对时间的插件
dayjs.extend(relativeTime)

// 默认语言为英文，配置为中文
dayjs.locale('zh-cn') // 全局使用
// console.log(dayjs().format('YYYY-MM-DD'))  当前时间
// console.log(dayjs().fromNow())
// console.log(dayjs().to(dayjs('1990-01-01')))
// console.log(dayjs().toNow())

// 定义一个全局过滤器
// 参数一：过滤器名称
// 参数二：过滤器函数
Vue.filter('relativeTime', function(value) {
  return dayjs().to(dayjs(value))
})
