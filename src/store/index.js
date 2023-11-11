import { getUserCookie, removeUserCookie, setCookie } from '@/utils/userCookie';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态
    collapsed: false,
    // 记录用户登陆信息
    user: getUserCookie(),
  },
  getters: {
  },
  // 里面定义方法，操作state的方法
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    loginOut(state) {
      // removeUserCookie();
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  // 操作异步操作mutations
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    loginOut({ commit }) {
      commit('loginOut');
      removeUserCookie();
    },
  },
  modules: {
  },
});
