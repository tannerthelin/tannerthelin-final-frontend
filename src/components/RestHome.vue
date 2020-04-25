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
            <v-list-item-avatar v-if="avatar">
              <v-img :src="game.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="game.title"></v-list-item-title>
              <v-list-item-subtitle>{{game.system}} • Completed on {{game.date_completed}}</v-list-item-subtitle>
            </v-list-item-content>
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
            :lazy-validation="lazy"
          >
            <v-text-field
              v-model="title"
              label="Game Title"
              required
            ></v-text-field>            

            <v-select
              v-model="system"
              :items="systemchoices"
              :rules="[v => !!v || 'Item is required']"
              label="What system did you play this on?"
              required
            ></v-select>

            <v-text-field
              v-model="date_completed"
              label="Date completed"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>

            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Update a game</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Delete a game</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    games: [],
    systemchoices: ["Xbox One", "Playstation 4", "PC", "Nintendo Switch", "iOS", "Android"],
    galaxies: [],
    galaxy: [],
    singleGalaxyID: '12345',
    createCategory: 'Star, Galaxy, Planet, etc.',
    createName: 'Enter Name',
    createConstellation: 'Enter Constellation',
    createNameOrigin: 'Name Origin',
    createDistance: 'Distance from Milky Way (in millions of light years)',

    updateID: '12345',
    updateCategory: 'Star, Galaxy, Planet, etc.',
    updateName: 'Enter Name',
    updateConstellation: 'Enter Constellation',
    updateNameOrigin: 'Name Origin',
    updateDistance: 'Distance from Milky Way (in millions of light years)',

    deleteID: '12345'
  }),

  methods: {
    // GET ALL GALAXIES
    getData() {
      let gameList = this.$store.state.games;
      console.log(gameList);
      this.games = gameList;
      // return axios
      //   .get(this.$store.state.games)
      //   .then(response => {
      //     console.log(response);
      //     this.galaxies = response.data;
      //     console.log(this.galaxies);
      //   })
      //   .catch(error => console.log(error));
    },

    // GET ONE GALAXY
    getOneGalaxy() {
      console.log(this.singleGalaxyID);
      const galaxyId = this.singleGalaxyID;
      const url = `http://localhost:3000/admin/single-galaxy/` + galaxyId;
      return axios
        .get(url)
        .then(response => {
          console.log(response);
          this.galaxy = response.data;
          console.log(this.person);
        })
        .catch(error => console.log(error));
    },

    // CREATE PERSON
    createPerson() {
      const url = `http://localhost:3000/admin/add-galaxy`;
      const data = {
        category: this.createCategory,
        name: this.createName,
        constellation: this.createConstellation,
        nameOrigin: this.createNameOrigin,
        distance: this.createDistance,
      };
      return axios
        .post(url, data)
        .then(response => {
          console.log(response);
          this.galaxy = response.data;
          console.log(this.galaxy);
          alert('Galaxy created. Get all to see!');
        })
        .catch(error => console.log(error));
    },

    // UPDATE PERSON
    updateGalaxy() {
      console.log(this.updateID);
      const url = `http://localhost:3000/admin/edit-galaxy`;
      const data = {
        galaxyId: this.updateID,
        category: this.updateCategory,
        name: this.updateName,
        constellation: this.updateConstellation,
        nameOrigin: this.updateNameOrigin,
        distance: this.updateDistance,
      };
      return axios
        .post(url, data)
        .then(response => {
          console.log(response);
          alert('Person updated. Get all to see changes!')
        })
        .catch(error => console.log(error));
    },

    // DELETE PERSON
    deleteGalaxy() {
      const url = `http://localhost:3000/admin/delete-galaxy`;
      console.log(this.deleteID);
      let data = {
        galaxyId: this.deleteID
      };
      console.log(data);
      return axios
        .post(url, data)
        .then(response => {
          console.log(data);
          alert(response.data);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped></style>


<!-- <template>
<div>
<h1>Welcome to the REST home!</h1>
<v-btn @click="getAllProducts">Get Data</v-btn>
</div>
</template>

<script>

export default {
  name: 'RestHome',

  data: () => ({
    searchString: "DGM"
  }),
  methods: {
    getAllProducts() {
      fetch('http://localhost:5000/admin/getAllProducts',
      {
          method: 'GET',
      })
      .then(response => {
         response.json().then(data => {
                return console.log(data)
          })
      })
      .catch(error => {
          return console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
-->