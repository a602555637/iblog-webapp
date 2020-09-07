import axios from '../utils/request'
import qs from 'qs'

// 用户点击今日签到
const userSign = () => axios.get('/user/fav')

// 更新用户基本资料
const updateUserInfo = data => axios.post('/user/basic', data)

// 确认修改用户名
const updateUserName = data => axios.get('/public/reset-email?' + qs.stringify(data))

// 修改密码
const changePasswd = data => axios.post('/user/change-password', { ...data })

// 收藏接口
const addCollect = data => axios.get('/user/set-collect?' + qs.stringify(data))

// 获取收藏列表
const getCollect = data => axios.get('/user/collect?' + qs.stringify(data))

// 获取我发表的文章列表
const getPostListByUid = data => axios.get('/user/post?' + qs.stringify(data))

// 获取用户最近发表的文章列表
const getPostPublic = data => axios.get('/public/latest-post?' + qs.stringify(data))

// 删除指定的文章
const deletePostByUid = data => axios.get('/user/delete-post?' + qs.stringify(data))

// 获取用户基本信息
const getInfo = data => axios.get('/user/info?' + qs.stringify(data))

// 获取用户最近评论列表
const getCommentList = data => axios.get('/public/latest-comment?' + qs.stringify(data))

export {
  userSign,
  updateUserInfo,
  updateUserName,
  changePasswd,
  addCollect,
  getCollect,
  getPostListByUid,
  getPostPublic,
  deletePostByUid,
  getInfo,
  getCommentList
}
