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
                            <td :key="restaurantId">{{restaurantInfo.name}}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{restaurantInfo.address}}</td>
                        </tr>                            
                        <tr>
                            <td>Bio</td>
                            <td>{{restaurantInfo.bio}}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{{restaurantInfo.city}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{restaurantInfo.email}}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>{{restaurantInfo.phoneNum}}</td>
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
import cookies from 'vue-cookies'
import {useRestaurantStore} from '@/stores/restaurant.js'
import {mapState, mapActions} from 'pinia'

import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantProfile',
        components:{
            RestaurantLogout
        },
        computed: {
            ...mapState (useRestaurantStore, ['restaurantInfo', 'restaurantId'])
        },
        methods: {
            ...mapActions (useRestaurantStore, ['getRestaurantInfo','getRestaurantId']),
            handleError(response){
                console.log(response);
            }
        },
        beforeMount(){
            this.getRestaurantId(cookies.get('restaurantId'))
        },
        mounted () {
            useRestaurantStore().$onAction(({name, after})=>{
                if (name == "getRestaurantIdAlert"){
                    console.log("handling");
                    after((response)=>{
                        this.handleError(response);
                    })
                }else if (name == "getRestaurantInfoAlert") {
                    console.log("handling");
                    after ((response)=> {
                        this.handleError(response)
                    })
                }
        })
        }
}
</script>

<style lang="scss" scoped>

</style>
