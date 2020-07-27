<template>
  <v-container>
    <AuthForm buttonText="Login" :submitForm="userLogin" />
  </v-container> 
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
  components: {
    AuthForm,
  },
  methods: {
    userLogin(userInfo) {
      this.$store.commit('SET_CURRENT_USER', userInfo)
      
    }
  }
}
</script>