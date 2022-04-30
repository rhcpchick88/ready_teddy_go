<template>
  <div>
    <v-container>
      <nav>
        <v-btn to="/">Home</v-btn> |
        <v-btn to="/client">Client login</v-btn> |
        <v-btn to="/restaurant">Restaurant login</v-btn>
      </nav>
      <router-view/>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
