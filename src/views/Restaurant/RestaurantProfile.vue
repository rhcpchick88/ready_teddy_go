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
    <div>
        <RestaurantLinks/>
        <footer>
            <RestaurantLogout/>
        </footer>
    </div>
</template>

<script>
import RestaurantLinks from '@/components/RestaurantLinks.vue'
import RestaurantLogout from '@/components/RestaurantLogout.vue'
    export default {
        name:'RestaurantProfile',
        components:{
            RestaurantLinks,
            RestaurantLogout
        }
    }
</script>

<style lang="scss" scoped>

</style>
