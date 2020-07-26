<template>
  <v-card width="500" class="mx-auto mt-5">
    <v-card-title class="headline">
      <h1>{{ buttonText }}</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
          label="Username"
          prepend-icon="mdi-account-circle" 
          v-model="userInfo.username"
        />
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          v-model="userInfo.password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"          
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" 
        @click="$auth.loginWith('local',{data: userInfo})"> {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>   
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    userInfo: {
      username: '',
      password: '',
    },
  }),
  props: ["submitForm", "buttonText"]  
}
</script>

<style>

</style>