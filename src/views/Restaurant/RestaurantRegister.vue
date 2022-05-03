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
                v-model="name"
                :rules="nameRules"
                label="Restaurant name"
                required
                ></v-text-field>
            </v-col>
    
            <v-col
                cols="12"
                md="6"
            >
                <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Address (street name and number)"
                required
                ></v-text-field>
            </v-col>
    
            <v-col
                cols="12"
                lg="4"
            >
                <v-text-field
                v-model="bio">
                    <template v-slot:label>
                        <div>
                            Bio<small> (Optional)</small>
                        </div>
                    </template>
                </v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
                <v-text-field
                type="city"
                v-model="city"
                :rules="cityRules"
                label="City"
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
                type="phone"
                v-model="phoneNum"
                label="Phone number"
                :rules="phoneRules"
                ></v-text-field>
            </v-col>            

            </v-row>
        <v-btn @click="submitRestaurant(name, address, bio, city, email, password, phoneNum)"> Register </v-btn>
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
        name: 'RestaurantRegister',
        components: {
            PublicLinks
        },
        data: () => ({
            name:'',
            address:'',
            bio:'',
            city:'',
            email:'',
            password:'',
            phoneNum:'',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
            v => !!v || 'Password is required',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must be at least 5 characters and contain at least one lowercase letter, one number, and one uppercase letter',
            ],
            nameRules: [
            v => !!v || 'Restaurant name is required'
            ], 
            addressRules: [
            v => !!v || 'Address is required'
            ],        
            cityRules: [
            v => !!v || 'City is required'
            ],                  
            phoneRules: [
            v => !!v || 'Phone number is required'
            ],             
        }),
        methods: {
            ...mapActions(useMainStore,['submitRestaurant']),
            handleRestaurantRegistration() {
                //Some kind of form validation
                this.submitForm(this.name, this.address, this.bio, this.city, this.email, this.password, this.phoneNum);
            },
            handleError(response){
                console.log(response);
            }
        },
        mounted () {
            useMainStore().$onAction(({name, after})=>{
                if (name == "restaurantRegisterAlert"){
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