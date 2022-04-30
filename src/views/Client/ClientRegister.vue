//register user
//link public links component


//form to input data
//update/confirm information button, when clicked takes to ClientProfile.vue
//show the update profile button if the profiles been created already (ie you are signed in already)
//show the confirm information button when there is no profile in the system (ie not signed in)
//if signed in this page will also show a delete profile button thru a delete api request

//Api call to register a user and an API call to update the user and API for delete.

//2 API CALLS:
//POST, PATCH, DELETE
//API URL FOODIEREST.ML/API/CLIENT

<template>
    <div>
        <PublicLinks/>
    <div id="app">
    <v-app id="inspire">
        <v-form v-model="valid">
        <v-container>
            <v-row>
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                v-model="firstname"
                :rules="firstnameRules"
                label="First name"
                required
                ></v-text-field>
            </v-col>
    
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                v-model="lastname"
                :rules="lastnameRules"
                label="Last name"
                required
                ></v-text-field>
            </v-col>
    
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                required
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                ></v-text-field>
            </v-col>

            </v-row>
        <v-btn  @click="submitForm"> Register </v-btn>
        </v-container>
        </v-form>
    </v-app>
</div>
    </div>
</template>

<script>

import axios from 'axios'
import PublicLinks from '@/components/PublicLinks.vue'
import cookies from 'vue-cookies'

    export default {
        name: 'ClientRegister',
        components: {
            PublicLinks
        },
        data: () => ({
            valid: false,
            email:'',
            username:'',
            firstName:'',
            lastName:'',
            password:'',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
            v => !!v || 'Password is required',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, and one uppercase letter',
            ],
            firstnameRules: [
            v => !!v || 'First name is required'
            ], 
            lastnameRules: [
            v => !!v || 'Last name is required'
            ],        
            usernameRules: [
            v => !!v || 'Username is required'
            ],                  
        }),
        methods: {
            submitForm () {
                axios.request({
                    method: "POST",
                    URL: process.env.VUE_APP_API_URL + "https://foodierest.ml/api/client",
                    headers:{
                        'x-api-key':'process.env.VUE_APP_API_KEY'
                    }
                }).then((response)=>{
                    cookies.set('loginToken',response.data.token);
                    this.$router.push('/clienthome')
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
    

</script>

<style lang="scss" scoped>

</style>