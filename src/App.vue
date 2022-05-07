<template>
  <div>
    <v-container>
      <div>
        <div v-if=clientLogin()><ClientLinks/></div>
        <div v-else-if=restaurantLogin()><RestaurantLinks/></div>
        <div v-else><PublicLinks/></div>
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


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { 
      PublicLinks ,
      ClientLinks,
      RestaurantLinks,
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
