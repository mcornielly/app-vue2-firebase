<template>
  <div class="container">
      <h1>Inicio</h1>
        <router-link to="/crear" class="btn btn-primary btn-block">Nueva Tarea</router-link>
      <hr>
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in tasks" :key="index">
          {{ item.name }} - {{ item.id }}
          <div class="float-right">
            <router-link class="btn btn-dark btn-sm mr-2" :to="{name: 'Edit',params: {id: item.id}}">Editar</router-link>
            <button class="btn btn-danger btn-sm" @click="deleteTask(item.id)">Eliminar</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  created() {
    this.getTasks()
  },
  methods: {
    ...mapActions(['getTasks', 'deleteTask'])
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>
