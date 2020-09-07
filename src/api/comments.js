import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'

// 获取文章评论列表
const getComments = params => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer ' + store.state.token
      }
    }
  }
  return axios.get('/public/comments?' + qs.stringify(params), headers)
}

// 添加评论接口
const addComments = data => axios.post('/comments/reply', { ...data })

// 更新评论接口
const updateComment = data => axios.post('/comments/update', { ...data })

// 设置最佳答案
const setCommentBest = params => axios.get('/comments/accept?' + qs.stringify(params))

// 点赞接口
const setHands = params => axios.get('/comments/hands?' + qs.stringify(params))

export {
  getComments,
  addComments,
  updateComment,
  setCommentBest,
  setHands
}
