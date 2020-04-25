
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
      v-model="drawer"
      app
    >
      <!-- Navigation Title -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Tanner's Final Project
          </v-list-item-title>
          <v-list-item-subtitle>
            Log the games you play
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Beginning of Navigation -->
      <v-list>
        <!-- Home Link -->
        <router-link class="routerLink" to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-animation-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>GraphQL: Get All</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- Graph QL Get One -->
        <router-link class="routerLink" to="get-one">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-numeric-1-box-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Get One Game</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- Graph QL Search -->
        <router-link class="routerLink" to="search">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Search Games</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- GraphQL Link -->
        <router-link class="routerLink" to="admin">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-pencil-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Edit GraphQL</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- Rest API Link -->
        <router-link class="routerLink" to="rest-home">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-code-tags</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Rest API</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-content>
      <v-container fluid class="main-container">
        <router-view></router-view>
      </v-container>          
    </v-content>

  </v-app>
</template>


<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>


<style scoped>
  .routerLink {
    text-decoration: none;
  }

  .main-container {
    padding: 20px 40px;
  }
</style>