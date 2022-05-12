//restaurant home page - welcome _______ restaurant name

//link rest view component

//as well as the restaurant links component, show the main links on the actual page too

////API call for restaurant name

// 1 API REQUEST:
//GET 
//API link FOODIEREST.ML/API/RESTAURANT

<template>
    <div>
        <h1>Welcome, {{restaurantInfo.name}} </h1>
        <footer>
            <RestaurantLogout/>
        </footer>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import {useRestaurantStore} from '@/stores/restaurant.js'
import {mapState, mapActions} from 'pinia'

import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'RestaurantHome',
        components:{
            RestaurantLogout
        },
        computed: {
            ...mapState (useRestaurantStore, ['restaurantInfo','restaurantId'])
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
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>