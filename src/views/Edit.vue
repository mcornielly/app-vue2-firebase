<template>
  <div>
      <h1>Editar</h1>
      {{ task.id }} - {{ task.name }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTask(this.id)
    },
    methods: {
        ...mapActions(['getTask'])
    },
    computed: {
        ...mapState(['task'])
    }
}
</script>

<style>

</style>