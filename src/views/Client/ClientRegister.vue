//register user
//link public links component


//form to input data
//update/confirm information button, when clicked takes to ClientProfile.vue
//show the update profile button if the profiles been created already (ie you are signed in already)
//show the confirm information button when there is no profile in the system (ie not signed in)
//if signed in this page will also show a delete profile button thru a delete api request

//Api call to register a user and an API call to update the user and API for delete.

//2 API CALLS:
//POST, PATCH, DELETE
//API URL FOODIEREST.ML/API/CLIENT

<template>
    <div>
        <PublicLinks/>
        <h1>Client create or update profile</h1>
        <form>
            <label>Email:</label>
            <input type="email" required>
            <label>Username :</label>
            <input type="username" required>            
            <label>First name:</label>
            <input type="firstName" required>
            <label>Last name:</label>
            <input type="lastName" required>
            <label>Password:</label>
            <input type="password" required>            
        </form>
        
    </div>
</template>

<script>
import PublicLinks from '@/components/PublicLinks.vue'
    export default {
        name: 'ClientRegister',
        components: {
            PublicLinks
        }
    }
</script>

<style lang="scss" scoped>

</style>