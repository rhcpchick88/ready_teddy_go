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
                            <td>{{getClientInfo(firstName)}}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{{getClientInfo(lastName)}}</td>
                        </tr>                            
                        <tr>
                            <td>Email</td>
                            <td>{{getClientInfo(email)}}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{{getClientInfo(username)}}</td>
                        </tr>
                        <tr>
                            <td>Picture</td>
                            <td>{{getClientInfo(pictureUrl)}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <footer>
                <ClientLogout/>
            </footer>            
        </v-app>
    </div>         

</template>

<script>
import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia'

import ClientLogout from '@/components/ClientLogout.vue'

    export default {
        name:'ClientProfile',
        components: {
            ClientLogout
        },
        data: () => ({
            email:'',
            username:'',
            firstName:'',
            lastName:'',
            pictureUrl:undefined
        }),
        methods: {
            ...mapActions (useMainStore, ['getClientInfo']),
            handleError(response){
                console.log(response);
            }
        },
        mounted () {
            useMainStore().$onAction(({name, after})=>{
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