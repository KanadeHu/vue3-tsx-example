import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const App = defineComponent({
  setup() {
    // 这里可以配置一些全局的layout，根据自己实际情况调整
    return () => <RouterView></RouterView>
  },
})

export default App
