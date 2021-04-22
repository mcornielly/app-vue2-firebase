<template>
  <div class="container">
      <h1>Iniciov</h1>
      <ul>
        <li v-for="(item, index) in tasks" :key="index">
          {{ item.name }} - {{ item.id }}
          <router-link class="btn btn-dark" :to="{name: 'Edit',params: {id: item.id}}">Editar</router-link>
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
    ...mapActions(['getTasks'])
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>
