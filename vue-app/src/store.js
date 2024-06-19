import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    strict: true,
    plugins: [
        createPersistedState()
    ],
    state: () => ({
        token: null,
        username: null,
        userStatus: null,
        userID: null,
        userImg: null,
        isUserLoggedIn: false,
    }),
    getters: {
        getState: state => {
          return state
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.isUserLoggedIn = !!(token)
        },
        setUsername(state, username) {
            state.username = username
        },
        setUserStatus(state, status){
            state.userStatus = status
        },
        setUserID(state, id){
            state.userID = id
        },
        setUserImg(state, img){
            state.userImg = img
        },
        logout(state){
            state.token = null
            state.isUserLoggedIn = null
            state.username = null
            state.userStatus = null
            state.userID = null
            state.userImg = null
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setUsername({ commit }, username) {
            // commit('setUser', user)
            commit('setUsername', username)
        },
        setUserStatus({ commit }, status){
            commit('setUserStatus', status)
        },
        setUserID({ commit }, id){
            commit('setUserID', id)
        },
        setUserImg({ commit }, img){
            commit('setUserImg', img)
        },
        logout({commit}){
            commit('logout')
        }
    }
})