//link return to main and logout components
<template>
    <div>
        <nav>
            <v-btn to="/clienthome">Home</v-btn> |
            <v-btn to="/clientprofile">Profile</v-btn> |
            <v-btn to="/cartview">Cart</v-btn> |
            <v-btn to="/menu">View Menus</v-btn>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'ClientLinks',
    }
</script>

<style lang="scss" scoped>

</style>