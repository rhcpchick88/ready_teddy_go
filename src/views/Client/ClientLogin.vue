//client login or register
//link login buttons component

//API call to sign in
//clicking button takes you to client home page

//1 API REQUEST:
//POST
//API FOODIEREST.ML/API/CLIENT-LOGIN

<template>
    <div>
        <h1>CLient Login Page</h1>
        <form>
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
        </form>
        <button>Log in</button>
        <button v-on:click="goToRegister()">Register</button>   
        <div v-if="errorMessage"> 
            <p> User Not Found </p>
        </div>
    </div>


</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

    export default {
        name : "ClientLogin",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login: function(){
                axios.request({
                    url: process.env.VUE_APP_API_URL + "https://foodierest.ml/api/client-login",
                    method : "POST",
                    headers:{
                        "Content-Type":"application/json",
                        "x-api-key" :"process.env.VUE_APP_API_KEY"
                    },
                    data:{
                        email : this.email,
                        password : this.password,
                    },                    
                }).then((response)=>{
                    cookies.set('loginToken', response.data.token)
                    console.log(response);
                    this.$router.push('/clienthome');
                }).catch((error)=>{
                    console.log(error);
                    this.errorMessage = "user not found";
                })
            },
            goToRegister() {
                this.$router.push('/clientregister')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>