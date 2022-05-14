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
            <v-btn  @click="updateMenuItem(name, description, price, imageUrl)"> Update menu item </v-btn> |
            <v-btn @click="deleteMenuItem(menuItem.menuId)" :key="menuItem.menuId">Delete menu item</v-btn> |            
            <v-btn @click="goBack()"> Go back </v-btn>       
            </v-container>
            </v-form>
            <footer>
                <RestaurantLogout/>
            </footer>
        </v-app>         
    </div>
</template>

<script>

// import {useMenuStore} from '@/stores/menu.js'
// import {mapState, mapActions} from 'pinia'

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
            // ...mapState (useMenuStore, ['menuItems', 'restaurantId', 'menuId']),
        },        
        methods: {
            // ...mapActions (useMenuStore, ['deleteMenuItem','updateMenuItem']),
            handleMenuItem() {
                this.submitForm(this.name, this.description, this.price, this.imageUrl);
            },
            handleError(response){
                console.log(response);
            },
            handleStoreError(response){
                console.log(response);
            },
            goBack(){
                this.$router.push('/createmenu')
            }                       
        },
        beforeMount() {
            this.updateMenuItem()
        }        
    }
</script>

<style lang="scss" scoped>

</style>