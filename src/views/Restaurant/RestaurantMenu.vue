//create and update restaurant menu

// provide a link from this menu to the public menu link of this restaurant

// can I write a function where if the user clicks on this link to the public page it will show 
// a "back to create menu" link on their menu view? 
//link rest view component
<template>
    <div id="app">
        <v-app id="inspire">
            <v-form>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Item name"
                    required
                    ></v-text-field>
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="description"
                    :rules="descriptionRules"
                    label="Item description"
                    required
                    ></v-text-field>
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="price"
                    :rules="priceRules"
                    label="Price"
                    required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="imageUrl"
                    label="Image URL"
                    outlined
                    ></v-text-field>
                </v-col>

                </v-row>
            <v-btn  @click="submitMenu(name, description, price, imageUrl)"> Submit menu item </v-btn> |
            <v-btn @click="goToMenu()"> View menus</v-btn>
            <ul>
                <li v-for="menuItem in menuItems" :key="menuItem.restaurantId">
                    {{menuItem.name}} - {{menuItem.description}} - {{menuItem.price}} - {{menuItem.menuId}} <v-btn @click="deleteMenuItem(menuItem.menuId)" :key="menuItem.menuId">Delete menu item</v-btn></li>
            </ul>            
            </v-container>
            </v-form>
            <footer>
                <RestaurantLogout/>
            </footer>
        </v-app>         
    </div>
</template>

<script>
import {useMenuStore} from '@/stores/menu.js'
import {useRestaurantStore} from '@/stores/restaurant.js'
import {mapState, mapActions} from 'pinia'

import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantMenu',
        components: {
            RestaurantLogout
        },
        data: () => ({
            name:'',
            description:'',
            price:'',
            imageUrl: undefined,
            menuId:'',
            nameRules: [
            v => !!v || 'Item name is required'
            ],
            descriptionRules: [
            v => !!v || 'Description is required'
            ],
            priceRules: [
            v => !!v || 'Price is required'
            ]
        }),
        computed: {
            ...mapState (useMenuStore, ['menuItems']),
            ...mapState (useRestaurantStore,['restaurantInfo'])
        },        
        methods: {
            ...mapActions (useMenuStore, ['submitMenu']),
            handleMenuItem() {
                this.submitForm(this.name, this.description, this.price, this.imageUrl);
            },
            handleError(response){
                console.log(response);
            },
            goToMenu() {
                this.$router.push('/menu')
            },
            ...mapActions (useMenuStore, ['getMenuInfo','deleteMenuItem']),
            handleStoreError(response){
                console.log(response);
            },                       
        },
        beforeMount() {
            this.getMenuInfo();
        }        
    }
</script>

<style lang="scss" scoped>

</style>