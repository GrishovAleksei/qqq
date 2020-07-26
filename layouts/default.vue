<template>
  <v-app>
    <v-app-bar>
      <v-btn text to="/">Home</v-btn>
      <v-spacer></v-spacer>
      
      <div v-if="$auth.loggedIn">
        <v-btn text @click="$auth.logout()">Logout</v-btn>
        {{ $auth.user.username }}
      </div>
      <div v-else >
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>  
</template>

<script>
export default {
  
}
</script>
