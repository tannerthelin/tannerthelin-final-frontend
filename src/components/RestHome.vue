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
              <v-list-item-subtitle v-html="game.system"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>        
      </v-list>      
    </v-card>
    <br />
    <v-btn @click="getData" class="dataBtn" id="getDataBtn">Get Data</v-btn>

      </v-col>


      <v-col cols="6">
        
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-container>
        <v-col cols="12">
          <h1>RESTFUL API Home</h1>
          <v-btn @click="getData" class="dataBtn" id="getDataBtn"
            >Get Data</v-btn
          >
        </v-col>
        <div>
          <v-row>
            <v-col cols="4" v-for="(item, i) in galaxies" :key="i">
              <v-card class="mx-auto" max-width="350">
                <v-card-text>
                  <p class="name">
                    ID: {{ item._id }}
                  </p>
                  <p><strong>Category:</strong> {{ item.category }}</p>
                  <p><strong>Name:</strong>  {{ item.name }}</p>
                  <p><strong>Constellation:</strong>  {{ item.constellation }}</p>
                  <p><strong>Name Origin:</strong>  {{ item.nameOrigin }}</p>
                  <p><strong>Distance from Milky Way (in millions of light years):</strong>  {{ item.distance }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-card-title>Get a Galaxy</v-card-title>
            <v-row>
            <v-col cols="6" md="6">
              <v-text-field v-model="singleGalaxyID" label="id" required filled></v-text-field>
            </v-col>
          </v-row>  
            <v-btn large color="primary" @click="getOneGalaxy()"
              >Get One Galaxy</v-btn
            >
          </v-container>
        </v-form>
        <v-container>
          <div>
            <v-row>
              <v-col cols="3">
                <v-card class="mx-auto" max-width="350">
                  <v-card-text>
                    <p class="name">{{ galaxy._id }}</p>
                    <p>{{ galaxy.category }}</p>
                    <p>{{ galaxy.name }}</p>
                    <p>{{ galaxy.constellation }}</p>
                    <p>{{ galaxy.nameOrigin }}</p>
                    <p>{{ galaxy.distance }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-card-title>Create a Galaxy</v-card-title>
            <v-row>
            <v-col cols="6" md="6">
              <v-text-field v-model="createCategory" label="category" required filled></v-text-field>
            </v-col>
            <v-col cols="6" md="6">
              <v-text-field v-model="createName" label="name" required filled></v-text-field>
            </v-col>
            <v-col cols="6" md="6">
              <v-text-field v-model="createConstellation" label="constellation" required filled></v-text-field>
            </v-col>
            <v-col cols="6" md="6">
              <v-text-field v-model="createNameOrigin" label="name origin" required filled></v-text-field>
            </v-col>
            <v-col cols="6" md="6">
              <v-text-field v-model="createDistance" label="distance" required filled></v-text-field>
            </v-col>
          </v-row>  
            <v-btn large color="primary" @click="createPerson()">Create Item</v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row>


  <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
                <v-card-title>Update an Item</v-card-title>
            <v-row>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateID" label="ID" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateCategory" label="category" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateName" label="name" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateConstellation" label="constellation" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateNameOrigin" label="name origin" required filled></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field v-model="updateDistance" label="distance" required filled></v-text-field>
              </v-col>
            </v-row>
            <v-btn large color="primary" @click="updateGalaxy()">Update Item</v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    

    <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-card-title>Delete an Item</v-card-title>
            <v-row>
            <v-col cols="6" md="6">
              <v-text-field v-model="deleteID" label="ID" required filled></v-text-field>
            </v-col>
          </v-row>  
            <v-btn large color="primary" @click="deleteGalaxy()">Delete Item</v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row> -->



    
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    games: [],
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