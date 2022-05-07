import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router';


export const useMenuStore = defineStore('main',{
    state : () => {
        return{
            menuItems: {},
            restaurantId: {},
        } 
    },
    actions:{
            getMenuInfo(){
                axios.request({
                    headers: {
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"menu",
                    method : "GET",
                }).then((response)=>{
                    cookies.get('restaurantToken');
                    console.log(response);
                    this.menuItems = response.data;
                    this.restaurantId = response.data.restaurantId
                    this.menuId = this.menuItems.menuId
                }).catch((error)=>{
                    console.log(error);
                    this.getRestaurantMenuInfoAlert(error.response);
                })
            },
            deleteMenuItem(menuId){
                console.log(menuId);
                axios.request({
                    headers: {
                        "token" : cookies.get('restaurantToken'),
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"menu",
                    method: "DELETE",
                    data:{
                        menuId
                    }
                }).then((response)=>{
                    console.log(response, "item has been deleted");
                    router.go;
                }).catch((error)=>{
                    console.log(error);
                    this.deleteMenuAlert(error.response);
                })
            },
            deleteMenuAlert(error){
                return (error)
            },
            getRestaurantMenuInfoAlert(error){
                return (error)
            }
    },
})