import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router';


export const useMenuStore = defineStore('menu',{
    state : () => {
        return{
            menuItems: {},
            restaurantId: undefined
        } 
    },
    actions:{

            //show menu info on client/public side

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

            //show specific restaurant and items for editing on restaurant side

            editMenuInfo(restaurantId){
                axios.request({
                    headers: {
                        "x-api-key" : process.env.VUE_APP_API_KEY
                    },
                    url:process.env.VUE_APP_API_URL+"menu",
                    method : "GET",
                    params:{
                        restaurantId
                    }
                }).then((response)=>{
                    cookies.get('restaurantToken');
                    console.log(response);
                    this.menuItems = response.data;
                    this.restaurantId = response.data.restaurantId
                }).catch((error)=>{
                    console.log(error);
                    this.editMenuInfoAlert(error.response);
                })
            },            


            //submit new menu items for your restaurant

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
                    router.go;
                    console.log(response);
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.menuCreateAlert(error.response);
                })
            },
            menuCreateAlert(error){
                return (error)
            },

            // update a specific menu item



            //delete a menu item

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
