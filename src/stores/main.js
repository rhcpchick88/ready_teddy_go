import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'


export const useMainStore = defineStore('main',{
    state : () => {
        return{
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
                cookies.set('loginToken', response.data.token);
                console.log(cookies.get('loginToken'));
                router.push('/clientprofile');
            }).catch((error)=>{
                console.log(error.response.data);
                this.userRegisterAlert(error.response);
            })
        },
        userRegisterAlert(error){
            return (error)
        },
        submitRestaurant(name, address, bio, city, email, password, phoneNum){
            axios.request({
                headers: {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"restaurant",
                method : "POST",
                data: {
                    name,
                    address,
                    bio,
                    city,
                    email,
                    password,
                    phoneNum
                }
                
            }).then((response)=>{
                cookies.set('loginToken', response.data.token);
                console.log(cookies.get('loginToken'));
                router.push('/restaurantprofile');
            }).catch((error)=>{
                console.log(error.response.data);
                this.restaurantRegisterAlert(error.response);
            })
        },
        restaurantRegisterAlert(error){
            return (error)
        }
    }
})
