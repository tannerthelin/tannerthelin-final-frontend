<template>
<div>
<!-- CREATE ITEM -->
  <ApolloMutation
    :mutation="require('../graphql/AddGame.gql')"
    :variables="{
      createTitle,
      createSystem,
      createDate
      }"
      @done="onDone"
  >
    <template v-slot="{ mutate, loading, error }">
      <!-- Form here -->
      <v-form>
          <h1>Edit Games in GraphQl</h1>
          <br><br>
          <h3>Create a New Game</h3>
          <v-row>
            <v-col cols="4" md="4">
              <v-text-field v-model="createTitle" label="Game Title" required filled></v-text-field>
            </v-col>
            <v-col cols="4" md="4">
              <v-text-field v-model="createSystem" label="System" rows="4" required filled></v-text-field>
            </v-col>
            <v-col cols="4" md="4">
              <v-text-field v-model="createDate" label="Date Completed" rows="4" required filled></v-text-field>
            </v-col>
          </v-row>        
          <v-btn large color="primary" :disabled="loading" @click="mutate()">Create Game</v-btn>
          <p v-if="error">An error occurred: {{ error }}</p>
      </v-form>
    </template>
  </ApolloMutation>

  <br><br><br><br>

<!-- UPDATE PERSON -->
<ApolloMutation
      :mutation="require('../graphql/UpdateGame.gql')"
      :variables="{
        updateId,
        updateField,
        updateValue
        }"
        @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        
        <!-- Form here -->
        <v-form>
            <h3>Update a Game's Title</h3>
            <v-row>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateId" label="ID of the game you want to update" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateValue" label="New Value" required filled></v-text-field>
              </v-col>
            </v-row>
          
            <v-btn large color="primary" :disabled="loading" @click="mutate()">Update Game</v-btn>
            <p v-if="error">An error occurred: {{ error }}</p>
        </v-form>
      </template>
    </ApolloMutation>

<br><br><br><br>

<!-- DELETE PERSON -->
    <ApolloMutation
      :mutation="require('../graphql/DeleteGame.gql')"
      :variables="{ removeId }"
        @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        
        <!-- Form here -->
        <v-form>
            <h3>Delete an Item</h3>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field v-model="removeId" label="ID of the game to delete" required filled></v-text-field>
              </v-col>
            </v-row>
          
            <v-btn large color="primary" :disabled="loading" @click="mutate()">Delete Game</v-btn>
            <p v-if="error">An error occurred: {{ error }}</p>
        </v-form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      createTitle: '',
      createSystem: '',
      createDate: '',

      updateId: '',
      updateField: '',
      updateValue: '',

      removeId: '',
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    }
  }
}
</script>