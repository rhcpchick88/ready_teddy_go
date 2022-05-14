import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'

//this store is for restaurant profile info, login info, and menu creation.
//all functions require a restaurant token except for the registration.

export const useRestaurantStore = defineStore('restaurant',{
    state : () => {
        return{
            restaurantInfo: {},
            restaurantId:undefined //for grabbing profile information 
        } 
    },
    actions:{

        //register a new restaurant

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
                    cookies.set('restaurantToken', response.data.token);
                    cookies.set('restaurantId', response.data.restaurantId)
                    console.log(cookies.get('restaurantToken'));
                    router.push('/restaurantprofile');
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.restaurantRegisterAlert(error.response);
                })
            },
            restaurantRegisterAlert(error){
                return (error)
            },

            //update restaurant profile

            updateRestaurant(name, address, bio, city, email, password, phoneNum){
                axios.request({
                    headers: {
                        "token" : cookies.get('restaurantToken'),
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"restaurant",
                    method : "PATCH",
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
                    console.log(response);
                    router.push('/restaurantprofile');
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.restaurantUpdateAlert(error.response);
                })
            },
            restaurantUpdateAlert(error){
                return (error)
            },




//requesting restaurant profile information to display on home page, profile page, and menu page

            getRestaurantInfo(){
                axios.request({
                    headers: {
                        "token" : cookies.get('restaurantToken'),
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"restaurant",
                    method : "GET",
                }).then((response)=>{
                    cookies.get('restaurantToken')
                    console.log(response);
                    this.restaurantInfo = response.data
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.getRestaurantInfoAlert(error.response);
                })
            },
            getRestaurantId(restaurantId){
                axios.request({
                    headers: {
                        "token" : cookies.get('restaurantToken'),
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"restaurant",
                    method : "GET",
                    params: {
                        restaurantId
                    }
                }).then((response)=>{
                    cookies.get('restaurantToken')
                    console.log(response.data[0]);
                    this.restaurantId = response.data.restaurantId
                    this.restaurantInfo=response.data[0]
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.getRestaurantIdAlert(error.response);
                })
            },            
    }
})
