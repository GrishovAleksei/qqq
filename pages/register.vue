<template>
  <v-container>
    <AuthForm buttonText="Register" :submitForm="userRegister" />
  </v-container> 
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
  components: {
    AuthForm,
  },
  methods :{
    async userRegister(userInfo){
      await this.$axios.post('/users', userInfo)
      await this.$auth.loginWith('local', { data: userInfo })
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>