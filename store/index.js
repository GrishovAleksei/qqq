import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    currentUser: {},
    users: [
      {username: 'qwerty', password: '123', name: 'Alex', email: 'df@df.com', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'},
      {username: 'Mike', password: '12345', name: 'Bob', email: 'sdff@df.com', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'},
      {username: 'John', password: '123456789', name: 'Jim', email: 'ew@df.com', photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'},
    ],
  },
  getters: {
    getInfo: (state) => (item) => state.currentUser[item],
    getUser: (state) => state.currentUser
  },
  mutations: {
    SET_CURRENT_USER(state, userInfo) {
      let user = state.users.find(u =>  u.username === userInfo.username &&
                                        u.password === userInfo.password)
      if(user) {
        state.currentUser = user
        this.$router.push('/profile')
      }
      else { this.$router.push('/')
      alert('There is no users with these username and password')
      }
      
      // window.localStorage.currentUser = JSON.stringify(this.state.currentUser)
    }
  },
})

export default store