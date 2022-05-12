import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'

export const useClientStore = defineStore('client',{
    state : () => {
        return{
            clientInfo : {},
            clientId:undefined
        }
        
    },
    actions: {
        submitClient(username, firstName, lastName, email, password, pictureUrl){
            axios.request({
                headers: {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"client",
                method : "POST",
                data: {
                    username ,
                    firstName,
                    lastName,
                    email,
                    password,
                    pictureUrl
                }
                
            }).then((response)=>{
                cookies.set('clientToken', response.data.token);
                console.log(cookies.get('clientToken'));
                router.push('/clientprofile');
            }).catch((error)=>{
                console.log(error.response.data);
                this.userRegisterAlert(error.response);
            })
        },
        userRegisterAlert(error){
            return (error)
        },
        getClientInfo(){
            axios.request({
                headers: {
                    "token" : cookies.get('clientToken'),
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                },
                url:process.env.VUE_APP_API_URL+"client",
                method : "GET",
            }).then((response)=>{
                cookies.get('clientToken')
                console.log(response);
                this.clientInfo = response.data
            }).catch((error)=>{
                console.log(error.response.data);
                this.getClientInfoAlert(error.response);
            })
        },
        getClientId(clientId){
            axios.request({
                headers:{
                    "token" : cookies.get('clientToken'),
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"client",
                method : "GET",  
                params: {
                    clientId
                }
            }).then((response)=>{
                cookies.get('clientToken')
                console.log(response.data[0])
                this.clientId = response.data.clientId
                this.clientInfo = response.data[0]
            }).catch((error)=>{
                console.log(error.response.data);
                this.getClientIdAlert(error.response)
            })
        }
    },
})   