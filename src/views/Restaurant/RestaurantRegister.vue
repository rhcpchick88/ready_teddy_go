//register restaurant
//link public links component


//form to input data
//update/confirm information button, when clicked takes to RestaurantProfile.vue
//show the update profile button if the profiles been created already (ie you are signed in already)
//show the confirm information button when there is no profile in the system (ie not signed in)
//if signed in this page will also show a delete profile button thru a delete api request

//Api call to register a user and an API call to update the user and API for delete.

//2 API CALLS:
//POST, PATCH, DELETE
//API URL FOODIEREST.ML/API/RESTAURANT

<template>
    <div>
        <PublicLinks/>
        <h1>Restaurant create or update profile</h1>
        <form>
            <label>Restaurant name:</label>
            <input type="restaurantName" required>
            <label>Street address:</label>
            <input type="address" required>            
            <label>Restaurant Bio:</label>
            <input type="restaurantBio" required>
            <label>City:</label>
            <input type="cityName" required>
            <label>Password:</label>
            <input type="Password" required>            
        </form>        
    </div>
</template>

<script>
import PublicLinks from '@/components/PublicLinks.vue'
    export default {
        name: 'RestaurantRegister',
        components: {
            PublicLinks
        }
    }
</script>

<style lang="scss" scoped>

</style>

