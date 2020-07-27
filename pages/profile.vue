<template>
  <v-container>
    <v-card width="500" class="mx-auto mt-5">
      <v-card-title class="headline">
        <h1>My Profile</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-img :src="getInfo('photo')">
          </v-img>
          <h2>
            {{ getInfo('name') }}
          </h2>
          {{ getInfo('username') }}
          <v-spacer></v-spacer>
          {{ getInfo('email') }}
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>   
  </v-container>
</template>

<script>
export default {
  computed: {
    getInfo() {
      return (item) => this.$store.getters.getInfo(item);
    }
  },
}
</script>