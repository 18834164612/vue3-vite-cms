import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'why',
      age: 12
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store
