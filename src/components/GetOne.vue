<template>
<div>
  <v-row>
      <v-col>
        <h1>Get One Game from GraphQL</h1><br>
        <p>Copy an ID from the "Get All" page and paste it here to retrieve that game.</p>
        <v-text-field v-model="idInput" label="Enter Game ID..."></v-text-field>
      </v-col>
    </v-row>
  <!-- Apollo watched Graphql query -->
  <ApolloQuery :query="require('../graphql/OneGame.gql')"
   :variables="{ idInput }">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <v-alert type="error" v-else-if="error" class="error apollo">An error occured</v-alert>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-row>
          <v-col cols="3" v-for="(item, i) in data" :key="i">
            <v-card class="mx-auto" max-width="350">
              <v-card-text>
                <div class="overline mb-4">Completed {{ item.date_completed }}</div>
                <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.system }}</v-list-item-subtitle>
                <p>ID: {{ item.id }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>



<!-- trying to get single query to work here --> 

  <!-- <ApolloQuery :query="require('../graphql/GetPerson.gql')"
   :variables="{ id }">
    <template v-slot="{ query, result: { loading, error, data } }">
      <v-form>
        <v-container>
          <v-card-title>Get a Person</v-card-title>
          <v-row>
            <v-col cols="6" md="6">
              <v-text-field v-model="id" label="id" required filled></v-text-field>
            </v-col>
          </v-row>        
          <v-btn large color="primary" :disabled="loading" @click="query()">Get Person</v-btn>
          <p v-if="error">An error occurred: {{ error }}</p>
        </v-container>
      </v-form>
-->

      <!-- Loading -->
      <!-- <div v-if="loading" class="loading apollo">Loading...</div> -->

      <!-- Error -->
      <!-- <div v-else-if="error" class="error apollo">An error occured</div> -->

      <!-- Result -->
      <!-- <div v-else-if="data" class="result apollo">
        <v-row>
            <v-card class="mx-auto" max-width="350">
              <v-card-text>
                <p class="name">
                  {{ Person.name }}
                </p>
                <p>{{ Person.age }}</p>
              </v-card-text>
            </v-card>
        </v-row>
      </div> -->

      <!-- No result -->
<!--       <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery> -->
</div>
</template>

<script>
//import vue-truncate-filter from 'vue-truncate-filter'

export default {
  name: 'HelloWorld',

  data: () => ({
    idInput: ''
  }),
}
</script>

<style scoped>
.result {
  padding: 1rem;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
