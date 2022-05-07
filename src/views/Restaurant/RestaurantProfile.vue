//create and save profile

//link rest links component

//when click update it takes you to the RestaurantRegister vue page.the page will return to this one when updated.

//the info is viewed as a list through an API call. 

//Displays in an undedited list form.
//Link restaueant links component

//1 API CALL:
//GET 
// API LINK FOODIEREST.ML/API/RESTAURANT

<template>
    <div id="app">
        <v-app id="inspire">
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td>Restaurant name</td>
                            <td>{{getRestaurantInfo(name)}}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{getRestaurantInfo(address)}}</td>
                        </tr>                            
                        <tr>
                            <td>Bio</td>
                            <td>{{getRestaurantInfo(bio)}}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{{getRestaurantInfo(city)}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{getRestaurantInfo(email)}}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>{{getRestaurantInfo(phoneNum)}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <footer>
                <RestaurantLogout/>
            </footer>            
        </v-app>                          
    </div>
</template>

<script>
import {useRestaurantStore} from '@/stores/restaurant.js'
import {mapActions} from 'pinia'

import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantProfile',
        components:{
            RestaurantLogout
        },
        data: () => ({
            name:'',
            address:'',
            bio:'',
            city:'',
            email:'',
            phoneNum:''
        }),
        methods: {
            ...mapActions (useRestaurantStore, ['getRestaurantInfo']),
            handleError(response){
                console.log(response);
            }
        },
        mounted () {
            useRestaurantStore().$onAction(({name, after})=>{
                if (name == "menuCreateAlert"){
                    console.log("handling");
                    after((response)=>{
                        this.handleError(response);
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
