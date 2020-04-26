import Vue from 'vue'
import Vuex from 'vuex'
import Games from './assets/games.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editableCourse: null,
    games: Games
  },
  getters: {
    currentEditableCourse: (state) => {
      return state.editableCourse
    },
  },
  mutations: {
    editCourse(state, editableCourse) {
      state.editableCourse = editableCourse
    },
    'DELETE_GAME' (state, payload) {
      let index = state.games.indexOf(payload);
      state.games.splice(index, 1);
    },
    'ADD_GAME' (state, payload) {
      state.games.push(payload);
    }
  },
  actions: {
    editCourse(context, course) {
      context.commit('editCourse', course)
    },
    deleteGame(context, game) {
      context.commit("DELETE_GAME", game);
    },
    addGame(context, game) {
      context.commit("ADD_GAME", game);
    }
  },
})
