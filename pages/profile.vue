<template>
  <v-card width="700" class="mx-auto mt-5">
    <v-card-title class="headline">
      <h1>My Profile</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        {{ loggedIn.user.username }}
        <v-spacer></v-spacer>
        {{ loggedIn.user.email }}
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>   
</template>

<script>
export default {
 
}
</script>