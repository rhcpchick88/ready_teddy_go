//restaurant home page - welcome _______ restaurant name

//link rest view component

//as well as the restaurant links component, show the main links on the actual page too

////API call for restaurant name

// 1 API REQUEST:
//GET 
//API link FOODIEREST.ML/API/RESTAURANT

<template>
    <div>
        <h1>{{getRestaurantInfo(name)}}I'm logged in!</h1>
        <footer>
            <RestaurantLogout/>
        </footer>
    </div>
</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia'

import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantHome',
        components:{
            RestaurantLogout
        },
        data: () => ({
            name:'',
        }),
        methods: {
            ...mapActions (useMainStore, ['getRestaurantInfo']),
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