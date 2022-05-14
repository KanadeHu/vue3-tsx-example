import { ElButton } from 'element-plus'
import { fetchUserInfo } from 'src/services/Common'
import type { UserItem } from 'src/services/Common/response'
import { useCounterStore } from 'src/store/Counter'
import { defineComponent, ref } from 'vue'

const Home = defineComponent({
  setup() {
    // 异步使用演示
    const list = ref<UserItem[]>([])
    const getData = async () => {
      list.value = await fetchUserInfo({})
    }
    getData()
    // pinia全局状态管理使用演示
    const countStore = useCounterStore()

    return () => {
      return (
        <>
          <div>home</div>
          {!!list.value &&
            list.value.map((i: UserItem) => (
              <p>
                {i.userName}-{i.age}
              </p>
            ))}
          <div>计数器值{countStore.count}</div>
          <ElButton onClick={() => countStore.increament()}>计数器 + 1</ElButton>
        </>
      )
    }
  },
})

export default Home
