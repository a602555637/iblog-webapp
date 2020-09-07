import {
  SET_SID,
  SET_USER,
  SET_ISLOGIN,
  SET_TOKEN,
  SET_HIDE,
  SET_MSG
} from '../mutation-types'
import { getCode, login } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'

export default {
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {},
    isHide: false,
    ws: null
  },
  mutations: {
    [SET_SID] (state, value) {
      state.sid = value
    },

    [SET_TOKEN] (state, value) {
      state.token = value
      // 本地存储token
      localStorage.setItem('token', value)
    },

    // 设置用户基本信息
    [SET_USER] (state, value) {
      if (value === '') return
      state.userInfo = value
      // 本地存储用户基本信息
      localStorage.setItem('userInfo', JSON.stringify(value))
    },

    // 设置isLogin的状态
    [SET_ISLOGIN] (state, value) {
      state.isLogin = value
    },
    // 设置container状态
    [SET_HIDE] (state, value) {
      state.isHide = value
    },
    [SET_MSG] (state, value) {
      state.num = value
    }
  },
  getters: {
    user: state => state.userInfo,
    isLogin: state => state.isLogin,
    token: state => state.token,
    sid: state => state.sid,
    isHide: state => state.isHide
  },
  actions: {
    message ({ commit }, msg) {
      commit('setMessage', msg)
    },
    // 获取图片验证码
    async getCode ({ commit }) {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      // 更改app中的sid，全局vuex
      commit('SET_SID', sid)
      const result = await getCode(sid)
      if (result.code === 200) {
        return result.data
      }
    },

    // 登陆逻辑
    async login ({ commit, state }, payload) {
      const result = await login({
        ...payload,
        sid: state.user.sid
      })
      if (result.code === 200 && result.token) {
        const userInfo = result.data
        userInfo.username = payload.username
        commit('SET_TOKEN', result.token)
        commit('SET_USER', userInfo)
        commit('SET_ISLOGIN', true)
      }
      return result
    }
  },
  modules: {}
}
