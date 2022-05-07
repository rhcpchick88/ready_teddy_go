<template>
    <div>
        <v-container>
        <ul>
            <li v-for="menuItem in menuItems" :key="menuItem.restaurantId">
                {{menuItem.name}} - {{menuItem.description}} - {{menuItem.price}} - {{menuItem.menuId}} <v-btn @click="deleteMenuItem(menuItem.menuId)" :key="menuItem.menuId">Delete menu item</v-btn></li>
        </ul>
        </v-container>
    </div>
</template>

<script>
import {useMenuStore} from '@/stores/menu.js'
import {mapState, mapActions} from 'pinia'

    export default {
        name: 'RestaurantMenuView',
        computed: {
            ...mapState (useMenuStore, ['menuItems','restaurantId',]),
        },
        data: ()=> ({
            menuId: ''
        }),
        methods: {
            ...mapActions (useMenuStore, ['getMenuInfo','deleteMenuItem']),
            handleStoreError(response){
                console.log(response);
            },
        },
        beforeMount() {
            this.getMenuInfo()
        }        
    }
</script>

<style lang="scss" scoped>

</style>