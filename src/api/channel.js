// 频道请求模块
import request from '@/utils/request'

// 请求全部频道列表
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}

// 添加频道列表
export const addUserChannel = (channel) => {
  return request({
    method: 'PATCH',
    url: 'v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}

// 删除频道列表
export const deleteUserChannel = (channelID) => {
  return request({
    method: 'DELETE',
    url: `/v1_0/user/channels/${channelID}`
  })
}
