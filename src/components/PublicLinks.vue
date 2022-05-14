// Links on public view 
<template>
    <div>
        <nav>
            <v-btn to="/">Home</v-btn> |
            <v-btn to="/restaurants">View Restaurants</v-btn> |
            <v-btn to="/restaurant">Restaurant Login / Register</v-btn> |
            <v-btn to="/client">Client Login / Register </v-btn>
        </nav>
    </div>
</template>

<script>
    export default {
        name : 'PublicLinks'
    }
</script>

<style lang="scss" scoped>

</style>