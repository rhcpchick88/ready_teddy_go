//view cart items and confirm order

//link client links  component
//link confirm order component
//link view order component **only shows up when confirm order has been clicked or client 
//clicks one of the orders in the order list*

//if there isn't an active order the page displays order list 

//view order list will not show up if order has not been confirmed 
//the order list is not a part of the API, it will be cookies until CONFIRMED and then it will
//be sent to the API as a POST request. Clicking confirmed will delete the order list cookies.

//pressing confirm will only show up if there is a view order list 

//if there is no view order list, the submitted order list shows up and shows links to the 
posted orders which if clicked show up through the view order component through a GET request

//the view order list will have "x" to delete any items (and therefore cookie  for that item)

//submitted orders will have a cancel order button next to it using PATCH request and 
//completeOrder booleans.

// 3 API REQUESTS: 
// GET, POST, PATCH
//API IS FOODIEREST.ML/API/ORDER
<template>
    <div>
        <ClientLinks/>
        <ViewOrder/>
        <ConfirmOrder/>
        <footer>
            <ClientLogout/>      
        </footer>
    </div>
</template>

<script>
import ClientLinks from '@/components/ClientLinks.vue'
import ConfirmOrder from '@/components/ConfirmOrder.vue'
import ViewOrder from '@/components/ViewOrder.vue'
import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name:'CartView',
        components: {
            ClientLinks,
            ViewOrder,
            ConfirmOrder,
            ClientLogout
        }
    }
</script>

<style lang="scss" scoped>

</style>