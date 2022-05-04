//create and update restaurant menu

// provide a link from this menu to the public menu link of this restaurant

// can I write a function where if the user clicks on this link to the public page it will show 
// a "back to create menu" link on their menu view? 
//link rest view component
<template>
    <div>
        <RestaurantLinks/>
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
            <v-btn  @click="submitMenu(name, description, price, imageUrl)"> Submit menu item </v-btn>
            </v-container>
            </v-form>
        </v-app>
        </div>
        <footer>
            <RestaurantLogout/>
        </footer>
    </div>
</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia'
import RestaurantLinks from '@/components/RestaurantLinks.vue'
import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantMenu',
        components: {
            RestaurantLinks,
            RestaurantLogout
        },
        data: () => ({
            name:'',
            description:'',
            price:'',
            imageUrl: undefined,
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
        methods: {
            ...mapActions (useMainStore, ['submitMenu']),
            handleMenuItem() {
                this.submitForm(this.name, this.description, this.price, this.imageUrl);
            },
            handleError(response){
                console.log(response);
            }
        },
        mounted () {
            useMainStore().$onAction(({name, after})=>{
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