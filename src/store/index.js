import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: {},
    tasks: []
  },
  mutations: {
    setTasks(state, payload){
      state.tasks = payload
    },
    setTask(state, payload) {
      state.task = payload
    },
    setDeleteTask(state, payload) {
      const filterTasks = state.tasks.filter(item => item.id !== payload)
      state.tasks = filterTasks
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
    },
    updateTask({commit}, task) {
      db.collection('tasks').doc(task.id).update({
        name: task.name
      })
     .then(() => {
        console.log('Tarea Actualizada');
        router.push('/')
      })
    },
    addTask({commit}, name) {
      db.collection('tasks').add({
        name: name
      })
      .then(doc => {
        console.log(doc.id)
        router.push('/')
      })
    },
    deleteTask({commit, dispatch}, taskId) {
      db.collection('tasks').doc(taskId).delete()
      .then(() => {
        console.log('Tarea Eliminada')
        // dispatch('getTasks')
        commit('setDeleteTask', taskId)
      })
    }
  },
  modules: {
  }
})
