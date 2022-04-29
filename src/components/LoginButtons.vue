<template>
    <div>
        <form>
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
        </form>
        <h1>button component</h1>
    </div>
</template>

<script>
    export default {
        name: 'LoginButtons'
    }
</script>

<style lang="scss" scoped>

</style>