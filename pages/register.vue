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
    
  }
}
</script>

<style>

</style>