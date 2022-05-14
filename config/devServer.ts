import { chrome } from 'chrome-paths'
// 端口号
const port = 3000
// 设定chrome为默认浏览器
process.env.BROWSER = chrome

export default {
  port,
  https: false,
  host: 'localhost',
  open: `http://localhost:${port}`,
}
