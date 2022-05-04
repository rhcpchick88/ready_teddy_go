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
        },
        submitMenu(name, description, price, imageUrl){
            axios.request({
                headers: {
                    "token" : cookies.get('loginToken'),
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"menu",
                method : "POST",
                data: {
                    name,
                    description,
                    price,
                    imageUrl
                }
            }).then((response)=>{
                cookies.get('loginToken');
                console.log(response);
                router.push('/menu');
            }).catch((error)=>{
                console.log(error.response.data);
                this.menuCreateAlert(error.response);
            })
        },
        menuCreateAlert(error){
            return (error)
        }

    }
})
