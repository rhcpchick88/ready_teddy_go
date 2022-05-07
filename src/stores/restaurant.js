import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'


export const useRestaurantStore = defineStore('main',{
    state : () => {
        return{
        }
        
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
                cookies.set('restaurantToken', response.data.token);
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
        submitMenu(name, description, price, imageUrl){
            axios.request({
                headers: {
                    "token" : cookies.get('restaurantToken'),
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
                cookies.get('restaurantToken');
                console.log(response);
                router.push('/menu');
            }).catch((error)=>{
                console.log(error.response.data);
                this.menuCreateAlert(error.response);
            })
        },
        menuCreateAlert(error){
            return (error)
        },
        getRestaurantInfo(name, address, bannerURL, bio, city, email, phoneNum, profileURL, restaurantId){
            axios.request({
                headers: {
                    "token" : cookies.get('restaurantToken'),
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"restaurant",
                method : "GET",
                data: {
                    name,
                    address,
                    bannerURL,
                    bio,
                    city,
                    email,
                    phoneNum,
                    profileURL,
                    restaurantId
                }
            }).then((response)=>{
                cookies.get('restaurantToken');
                console.log(response);
            }).catch((error)=>{
                console.log(error.response.data);
                this.getRestaurantInfoAlert(error.response);
            })
        },
        getRestaurantMenuInfo(name, description, price, imageUrl, menuId, restaurantId){
            axios.request({
                headers: {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url:process.env.VUE_APP_API_URL+"restaurant",
                method : "GET",
                data: {
                    name,
                    description,
                    price,
                    imageUrl,
                    menuId,
                    restaurantId
                }
            }).then((response)=>{
                cookies.get('restaurantToken');
                console.log(response);
            }).catch((error)=>{
                console.log(error.response.data);
                this.getRestaurantMenuInfoAlert(error.response);
            })
        },
})
