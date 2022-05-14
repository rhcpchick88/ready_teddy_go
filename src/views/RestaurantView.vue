
<template>
    <div id="app">
        <v-app id="inspire">
            <v-simple-table>
                <template v-slot:default>
                    <ul>
                        <li v-for="restaurantInfo in restaurantInfo" :key="restaurantInfo.restaurantId">
                            {{restaurantInfo.name}} - {{restaurantInfo.bio}}
                        </li>
                    </ul>
                </template>
            </v-simple-table>
            <footer v-if="restaurantLogin()"><RestaurantLogout/></footer>
            <footer v-if="clientLogin()"><ClientLogout/></footer>         
        </v-app>   
    </div>
</template>

<script>
import {useRestaurantStore} from '@/stores/restaurant.js'
import {mapActions, mapState} from 'pinia'

import cookies from 'vue-cookies'

import RestaurantLogout from '@/components/RestaurantLogout.vue'
import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name: 'MenuView',
        components: {
            RestaurantLogout,
            ClientLogout
        },  
        computed:{
            ...mapState (useRestaurantStore, ['restaurantInfo'])
        },     
        methods: {
            ...mapActions (useRestaurantStore, ['getRestaurantInfo']),
            handleError(response){
                console.log(response);
            },            
            clientLogin() {
                return cookies.get('clientToken')
            },
            restaurantLogin(){
                return cookies.get('restaurantToken')
            }
        },
        beforeMount(){
            this.getRestaurantInfo()
        },
        mounted () {
            useRestaurantStore().$onAction(({name, after})=>{
                if (name == "getRestaurantInfoAlert"){
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