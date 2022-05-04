//create or update client profile

//link client links component

//when click update it takes you to the ClientRegister vue page.the page will return to this one when updated.

//the info is viewed as a list through an API call. 

//Displays in an undedited list form.

//1 API CALL:
//GET 
// API LINK FOODIEREST.ML/API/CLIENT


<template>
    <div>
        <ClientLinks/>
        <footer>
            <ClientLogout/>
        </footer>
    </div>
</template>

<script>
import ClientLinks from '@/components/ClientLinks.vue'
import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name:'ClientProfile',
        components: {
            ClientLinks,
            ClientLogout
        }
    }
</script>

<style lang="scss" scoped>

</style>