//create or update client profile

//link client links component

//when click update it takes you to the ClientRegister vue page.the page will return to this one when updated.

//the info is viewed as a list through an API call. 

//Displays in an undedited list form.

//1 API CALL:
//GET 
// API LINK FOODIEREST.ML/API/CLIENT


<template>
    <div id="app">
        <v-app id="inspire">
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{{clientInfo.firstName}}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{{clientInfo.lastName}}</td>
                        </tr>                            
                        <tr>
                            <td>Email</td>
                            <td>{{clientInfo.email}}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{{clientInfo.username}}</td>
                        </tr>
                        <tr>
                            <td>Picture</td>
                            <td>{{clientInfo.pictureUrl}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <footer>
                <v-btn @click="goToUpdate()">Update profile</v-btn>                
                <ClientLogout/>
            </footer>            
        </v-app>
    </div>         

</template>

<script>
import cookies from 'vue-cookies'
import {useClientStore} from '@/stores/client.js'
import {mapState, mapActions} from 'pinia'

import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name:'ClientProfile',
        components: {
            ClientLogout
        },
        computed:{
            ...mapState (useClientStore, ['clientInfo', 'clientId'])
        },
        methods: {
            ...mapActions (useClientStore, ['getClientInfo', 'getClientId']),
            handleError(response){
                console.log(response);
            },
            goToUpdate(){
                this.$router.push('/clientupdateprofile')
            }            
        },
        beforeMount(){
            this.getClientId(cookies.get('clientId'))
        },
        mounted () {
            useClientStore().$onAction(({name, after})=>{
                if (name == "getClientInfoAlert"){
                    console.log("handling");
                    after((response)=>{
                        this.handleError(response);
                    })
                }else if (name == "getClientIdAlert") {
                    console.log("handling");
                    after ((response)=> {
                        this.handleError(response)
                    })                    
                }
            })
        }        
    }
</script>

<style lang="scss" scoped>

</style>