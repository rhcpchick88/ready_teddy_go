//this will have a function to show 
//what the page looks like when clicked on as public, restaurant, and client users. (3 V-IF)
//link 3 components to this page : restaurant links, client links, and public links.
//showing the restaurant view will show the restaurant links as well as the public menu
//showing the client view will show the client links as well as make the items clickable so 
//they can add it to the cart list 
// ALSO do v-if for logout footer.
<template>
    <div>
        <RestaurantLinks/>
        <ClientLinks/>
        <PublicLinks/>
        <footer>
            <LogoutFooter/>
        </footer>
    </div>
</template>

<script>
// import cookies from 'vue-cookies'

import RestaurantLinks from '@/components/RestaurantLinks.vue'
import ClientLinks from '@/components/ClientLinks.vue'
import PublicLinks from '@/components/PublicLinks.vue'

    export default {
        name: 'MenuView',
        components: {
            RestaurantLinks,
            ClientLinks,
            PublicLinks
        }
    }
</script>

<style lang="scss" scoped>

</style>