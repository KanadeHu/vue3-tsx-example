import { defineStore } from 'pinia'

import type { CounterState } from './type'

export const useCounterStore = defineStore('counterStore', {
  state: (): CounterState => ({
    count: 1,
    name: '测试store',
  }),

  getters: {
    doubleCount: state => state.count * 2,
  },
  // 后面还有action异步获取值，这里值演示同步修改值
  actions: {
    increament() {
      this.count += 1
    },
  },
})
