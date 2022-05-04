//links to every client view

//1 API CALL BBASED ON WHO IS SIGNED IN 
//DELETE 
//API URLS FOODIEREST.ML/API/CLIENT-LOGIN
<template>
    <div>
        <v-btn @click="logout">Log out</v-btn>
        <div v-if="error"> 
            <p> Unable to Log out </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: 'ClientLogout',
        methods: {
            logout: function(){
                axios.request({
                    url: process.env.VUE_APP_API_URL + "client-login",
                    method : "DELETE",
                    headers:{
                        "x-api-key" :process.env.VUE_APP_API_KEY
                    }                
                }).then((response)=>{
                    cookies.remove('loginToken', response.data.token)
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