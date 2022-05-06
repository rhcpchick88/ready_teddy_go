<template>
  <div>
    <v-container>

      <div>
        <div v-if=clientLogin()><ClientLinks/></div>
        <div v-else-if=restaurantLogin()><RestaurantLinks/></div>
        <div v-else><PublicLinks/></div>
        <footer v-if=restaurantLogin()><RestaurantLogout/></footer>
        <footer v-if=clientLogin()><ClientLogout/></footer>
    </div>
      <router-view/>
    </v-container>
  </div>
</template>

<script>
import cookies from 'vue-cookies'

import PublicLinks from "./components/PublicLinks.vue";
import ClientLinks from "./components/ClientLinks.vue";
import RestaurantLinks from "./components/RestaurantLinks.vue";
import RestaurantLogout from "./components/RestaurantLogout.vue";
import ClientLogout from "./components/ClientLogout.vue"

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { 
      PublicLinks ,
      ClientLinks,
      RestaurantLinks,
      RestaurantLogout,
      ClientLogout
      },
        methods: {
            clientLogin() {
                return cookies.get('clientToken')
            },
            restaurantLogin(){
                return cookies.get('restaurantToken')
            }
        },    
};
</script>
