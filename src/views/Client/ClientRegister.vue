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
                v-model="firstName"
                :rules="firstNameRules"
                label="First name"
                required
                ></v-text-field>
            </v-col>
    
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
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
            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                type="pictureUrl"
                v-model="pictureUrl"
                label="Picture URL"
                outlined
                ></v-text-field>
            </v-col>            

            </v-row>
        <v-btn  @click="submitClient(username, firstName, lastName, email, password, pictureUrl)"> Register </v-btn>
        </v-container>
        </v-form>
    </v-app>
</div>
    </div>
</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia'
import PublicLinks from '@/components/PublicLinks.vue'


    export default {
        name: 'ClientRegister',
        components: {
            PublicLinks
        },
        data: () => ({
            email:'',
            username:'',
            firstName:'',
            lastName:'',
            password:'',
            pictureUrl:undefined,
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
            v => !!v || 'Password is required',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must be at least 5 characters and contain at least one lowercase letter, one number, and one uppercase letter',
            ],
            firstNameRules: [
            v => !!v || 'First name is required'
            ], 
            lastNameRules: [
            v => !!v || 'Last name is required'
            ],        
            usernameRules: [
            v => !!v || 'Username is required'
            ],                  
        }),
    methods: {
        ...mapActions(useMainStore,['submitClient']),
        handleUserRegistration() {
            //Some kind of form validation
            this.submitForm(this.username, this.firstName, this.lastName, this.email, this.password, this.pictureUrl);
        },
        handleError(response){
            console.log(response);
        }
    },
    mounted () {
        useMainStore().$onAction(({name, after})=>{
            if (name == "userRegisterAlert"){
                console.log("handling");
                after((response)=>{
                    this.handleError(response);
                })
            }
        });
    },
    }
    

</script>

<style lang="scss" scoped>

</style>