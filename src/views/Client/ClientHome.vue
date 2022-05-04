client home page  welcome ______ client name
//as well as the client links component, show the main links on the actual page too
//link rest view component

//API call for client username

// 1 API REQUEST:
//GET 
//API link FOODIEREST.ML/API/CLIENT

<template>
    <div>
        <ClientLinks/>
        <h1>I'm logged in!</h1>
    </div>
</template>

<script>
import ClientLinks from '@/components/ClientLinks.vue'

    export default {
        name: 'ClientHome',
        components:{
            ClientLinks
        }
    }
</script>

<style lang="scss" scoped>

</style>