//this will have a function to show 
//what the page looks like when clicked on as public, restaurant, and client users. (3 V-IF)
//link 3 components to this page : restaurant links, client links, and public links.
//showing the restaurant view will show the restaurant links as well as the public menu
//showing the client view will show the client links as well as make the items clickable so 
//they can add it to the cart list 
// ALSO do v-if for logout footer.
<template>
    <div id="app">
        <v-app id="inspire">
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <ul>
                            <li v-for ="menuItem in menuItems" :key="menuItem.restaurantId">
                            {{menuItem.name}}
                            {{menuItem.description}}
                            {{menuItem.price}}
                            {{menuItem.imageUrl}}
                            </li>
                        </ul>
                    </tbody>
                </template>
            </v-simple-table>
            <footer v-if="restaurantLogin()"><RestaurantLogout/></footer>
            <footer v-if="clientLogin()"><ClientLogout/></footer>         
        </v-app>   
    </div>
</template>

<script>
import {useMenuStore} from '@/stores/menu.js'
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
            ...mapState (useMenuStore, ['menuItems', 'restaurantId'])
        },      
        methods: {
            ...mapActions (useMenuStore, ['editMenuInfo', 'getMenuInfo']),
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
            this.editMenuInfo()
        },
        mounted () {
            useMenuStore().$onAction(({name, after})=>{
                if (name == "getMenuInfoAlert"){
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