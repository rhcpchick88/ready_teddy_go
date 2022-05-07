//client login or register
//link login buttons component

//API call to sign in
//clicking button takes you to client home page

//1 API REQUEST:
//POST
//API FOODIEREST.ML/API/CLIENT-LOGIN

<template>
    <div>
        <h1>Log in here:</h1>
        <v-app id="inspire">
            <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                        <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                        ></v-text-field>
                    </v-col>                    
                </v-row>
            </v-container>
            </v-form>
        <v-btn @click="login">Click to Log in</v-btn>
        <div>
            <h1>Register your account here:</h1>
        </div>
        <v-btn @click="goToRegister()">Click to go to Registration Form:</v-btn>   
        <div v-if="errorMessage"> 
            <p> User Not Found </p>
        </div>            
        </v-app>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

export default {
    name : 'ClientLogin',
    data() {
            return {
                email: "",
                password: "",
                emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                v => !!v || 'Password is required',
                v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must be at least 5 characters and contain at least one lowercase letter, one number, and one uppercase letter',
                ]
            }
        },
        methods: {
            login: function(){
                axios.request({
                    url: process.env.VUE_APP_API_URL + "client-login",
                    method : "POST",
                    headers:{
                        "x-api-key" :process.env.VUE_APP_API_KEY
                    },
                    data:{
                        email : this.email,
                        password : this.password,
                    },                    
                }).then((response)=>{
                    cookies.set('clientToken', response.data.token)
                    console.log(response);
                    this.$router.push('/clienthome');
                }).catch((error)=>{
                    console.log(error);
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
