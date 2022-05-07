//view and confirm client orders

//link rest view component
//link confirm order component

<template>
    <div>
        <ViewOrder/>
        <ConfirmOrder/>
        <footer>
            <RestaurantLogout/>
        </footer>
    </div>
</template>

<script>
import ConfirmOrder from '@/components/ConfirmOrder.vue'
import ViewOrder from '@/components/ViewOrder.vue'
import RestaurantLogout from '@/components/RestaurantLogout.vue'

    export default {
        name:'OrderView',
        components:{
            ConfirmOrder, 
            ViewOrder,
            RestaurantLogout
        }
    }
</script>

<style lang="scss" scoped>

</style>