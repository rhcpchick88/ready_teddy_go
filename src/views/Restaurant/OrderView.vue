//view and confirm client orders

//link rest view component
//link confirm order component

<template>
    <div>
        <RestaurantLinks/>
        <ViewOrder/>
        <ConfirmOrder/>
        <footer>
            <LogoutFooter/>
        </footer>
    </div>
</template>

<script>
import RestaurantLinks from '@/components/RestaurantLinks.vue'
import ConfirmOrder from '@/components/ConfirmOrder.vue'
import ViewOrder from '@/components/ViewOrder.vue'
import LogoutFooter from '@/components/ClientLogout.vue'

    export default {
        name:'OrderView',
        components:{
            RestaurantLinks,
            ConfirmOrder, 
            ViewOrder,
            LogoutFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>