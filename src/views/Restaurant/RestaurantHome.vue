//restaurant home page - welcome _______ restaurant name

//link rest view component

//as well as the restaurant links component, show the main links on the actual page too

////API call for restaurant name

// 1 API REQUEST:
//GET 
//API link FOODIEREST.ML/API/RESTAURANT

<template>
    <div>
        <RestaurantLinks/>
        <h1>I'm logged in!</h1>
        <footer>
            <LogoutFooter/>
        </footer>
    </div>
</template>

<script>
import RestaurantLinks from '@/components/RestaurantLinks.vue'
import LogoutFooter from '@/components/ClientLogout.vue'

    export default {
        name:'RestaurantHome',
        components:{
            RestaurantLinks,
            LogoutFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>