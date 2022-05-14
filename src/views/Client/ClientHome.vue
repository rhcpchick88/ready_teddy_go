client home page  welcome ______ client name
//as well as the client links component, show the main links on the actual page too
//link rest view component

//API call for client username

// 1 API REQUEST:
//GET 
//API link FOODIEREST.ML/API/CLIENT

<template>
    <div>
        <h1 >Welcome, {{clientInfo.firstName}}</h1>
        <footer>
            <ClientLogout/>
        </footer>
    </div>
</template>

<script>
import cookies from 'vue-cookies'

import {useClientStore} from '@/stores/client.js'
import {mapState, mapActions} from 'pinia'


import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name: 'ClientHome',
        components:{
            ClientLogout
        }, 
        computed: {
            ...mapState (useClientStore,['clientInfo', 'clientId'])
        },
        methods: {
            ...mapActions (useClientStore, ['getClientInfo','getClientId']),
            handleError(response){
                console.log(response);
            }
        },
        beforeMount(){
            this.getClientId(cookies.get('clientId')),
            this.getClientInfo()
        },
        mounted () {
            useClientStore().$onAction(({name, after})=>{
                if (name == "getClientInfoAlert"){
                    console.log("handling");
                    after((response)=>{
                        this.handleError(response);
                    })
                }
            })
        }             
    }

</script>

<style lang="scss" scoped>

</style>