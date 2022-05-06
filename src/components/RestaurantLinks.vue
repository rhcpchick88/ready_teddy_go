//link back to main and logout components

<template>
    <div>
        <nav>
            <v-btn to="/restauranthome">Home</v-btn> |
            <v-btn to="/restaurantprofile">Profile</v-btn> |
            <v-btn to="/createmenu">Edit menu</v-btn> |
            <v-btn to="/orderview">Manage orders</v-btn> |
            <v-btn to="/menu">View restaurant menus</v-btn>
        </nav>
    </div>
</template>

<script>

    export default {
    name: "RestaurantLinks",

}
</script>

<style lang="scss" scoped>

</style>