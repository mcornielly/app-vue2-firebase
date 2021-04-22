import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: {
      name: '',
      id: ''
    },
    tasks: []
  },
  mutations: {
    setTasks(state, payload){
      state.tasks = payload
    },
    setTask(state, payload) {
      state.task = payload
    }
  },
  actions: {
    getTasks({commit}) {
      const tasks = []
      db.collection('tasks').get()
      .then(res => {
        res.forEach(doc => {
          // console.log(doc.id);
          // console.log(doc.data);
          let task = doc.data()
          task.id = doc.id
          tasks.push(task)
        })
        commit('setTasks', tasks)
      })
    },
    getTask({commit}, idTask) {
      db.collection('tasks').doc(idTask).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let task = doc.data()
          task.id = doc.id
          commit('setTask', task)
        })
    }
  },
  modules: {
  }
})
