/**
 * @description 模拟请求写法
 */
import { get } from 'tool/axios'

import type { UserItem } from './response'

export async function fetchUserInfo(params: Record<string, any>) {
  const data = await get<Array<UserItem>>('/userList', params, '获取用户列表')
  return data
}
