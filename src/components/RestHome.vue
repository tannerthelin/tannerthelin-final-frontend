<template>
  <div>
    <h1>Restful API Home</h1>
    <v-row>
      <v-col cols="6">

        <v-card
      class="mx-auto"
      width="100%"
      tile
    >
      <v-list
        :disabled="disabled"
        :dense="dense"
        :two-line="twoLine"
        :three-line="threeLine"
        :shaped="shaped"
        :flat="flat"
        :subheader="subheader"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-subheader>REST API GAME LIST</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(game, i) in games"
            :key="i"
            :inactive="inactive"
          >
            <v-list-item-content>
              <v-list-item-title v-html="game.title"></v-list-item-title>
              <v-list-item-subtitle>{{game.system}} • Completed on {{game.date_completed}}</v-list-item-subtitle>              
            </v-list-item-content>
            <v-list-item-action>
                <v-btn @click="sendUpdateData(game)" icon>
                  <v-icon color="grey lighten-1">mdi-pencil-outline</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action>
                <v-btn @click="deleteGame(game)" icon>
                  <v-icon color="grey lighten-1">mdi-delete-outline</v-icon>
                </v-btn>
              </v-list-item-action>
          </v-list-item>
        </v-list-item-group>        
      </v-list>      
    </v-card>
    <br />
    <v-btn @click="getData" class="dataBtn" id="getDataBtn">Get Data</v-btn>
      </v-col>


      <v-col cols="6">
        <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Create a game</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="gameToCreate.title"
              label="Game Title"
              required
            ></v-text-field>            

            <v-select
              :items="systemchoices"
              v-model="gameToCreate.system"
              label="What system did you play this on?"
            ></v-select>

            <v-text-field
              v-model="gameToCreate.date_completed"
              label="Date completed"
              required
            ></v-text-field>

            <!-- <v-btn
              depressed
              color="normal"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn> -->

            <v-btn
              outlined
              color="deep-purple"
              @click="createGame(gameToCreate)"
            >
              Create Game
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Update a game</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="gameToUpdate.title"
              label="Game Title"
              required
            ></v-text-field>            

            <v-select
              :items="systemchoices"
              v-model="gameToUpdate.system"
              label="What system did you play this on?"
            ></v-select>

            <v-text-field
              v-model="gameToUpdate.date_completed"
              label="Date completed"
              required
            ></v-text-field>

            <!-- <v-btn
              depressed
              color="normal"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn> -->

            <v-btn
              outlined
              color="deep-purple"
              @click="updateGame(gameToUpdate)"
            >
              Update Game
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data: () => ({
    games: [],
    systemchoices: ["Xbox One", "Playstation 4", "PC", "Nintendo Switch", "iOS", "Android"],
    
    gameToCreate: {
      title: '',
      system: '',
      date_completed:''
    },

    updateTitleBefore:'',
    gameToUpdate: {
      title: '',
      system: '',
      date_completed:''
    }
  }),

  methods: {
    // GET ALL GALAXIES
    getData() {
      let gameList = this.$store.state.games;
      console.log(gameList);
      this.games = gameList;
    },

    // GET ONE GALAXY
    deleteGame(game) {
      this.$store.dispatch("deleteGame", game);
    },

    createGame(game) {
      let gameList = this.$store.state.games;
      // this.$store.dispatch("createGame", game);
      gameList.push(game);
      this.gameToCreate = {
      title: '',
      system: '',
      date_completed:''
      }
    },

    sendUpdateData(game) {
      this.updateTitleBefore = game.title;
      this.gameToUpdate.title = game.title;
      this.gameToUpdate.system = game.system;
      this.gameToUpdate.date_completed = game.date_completed;
    },

    updateGame() {
      let gameList = this.$store.state.games;
      let mainGame = gameList.find(element => element.title === this.updateTitleBefore);
      mainGame.title = this.gameToUpdate.title;
      mainGame.system = this.gameToUpdate.system;
      mainGame.date_completed = this.gameToUpdate.date_completed;
      this.gameToUpdate = {
      title: '',
      system: '',
      date_completed:''
    }
    },
  }
};
</script>

<style scoped></style>