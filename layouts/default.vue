<template>
  <v-app>
    <v-app-bar>
      <v-btn text to="/">Home</v-btn>
      <v-spacer></v-spacer>
      
      <div v-if="getInfo('email')">
        <v-btn text to="/profile">My profile</v-btn>
        <v-btn text @click="logout">Logout</v-btn>
        {{ getInfo('email') }}
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <!-- <v-btn text to="/register">Register</v-btn> -->
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>  
</template>

<script>
export default {
  computed: {
    getInfo() {
      return (item) => this.$store.getters.getInfo(item);
    }
  },
  methods: {
    logout() {
      this.$store.state.currentUser = {}
      this.$router.push('/')
    }
  }
  
}
</script>
