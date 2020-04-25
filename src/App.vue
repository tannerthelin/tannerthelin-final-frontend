
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
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- GraphQL Link -->
        <router-link class="routerLink" to="admin">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-code-tags</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>GraphQL</v-list-item-title>
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
      <v-container fluid>
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
</style>
<!-- <template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <v-spacer></v-spacer>
    <div>
        <router-link class="routerLink" to="/">Home</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/admin">Admin</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/rest-home">Rest Home</router-link>
      </div>
    <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>

    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.routerLink {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
}

.main-sidebar {

}
</style> -->
