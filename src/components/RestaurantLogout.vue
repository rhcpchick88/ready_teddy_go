//links to every restaurant view

//1 API CALL BBASED ON WHO IS SIGNED IN 
//DELETE 
//API URLS FOODIEREST.ML/API/RESTAURANT-LOGIN
<template>
    <div>
        <v-btn @click="logout">Log out</v-btn>
        <!-- <div v-if="errorMessage"> 
            <p> Unable to Log out </p>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: 'RestaurantLogout',
        methods: {
            logout: function(){
                axios.request({
                    url: process.env.VUE_APP_API_URL + "restaurant-login",
                    method : "DELETE",
                    headers:{
                        "x-api-key" :process.env.VUE_APP_API_KEY
                    }                
                }).then((response)=>{
                    cookies.remove('restaurantToken', response.data.token)
                    console.log(response);
                    this.$router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>