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
      try {
        await this.$auth.loginWith('local', {data: userInfo})
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>