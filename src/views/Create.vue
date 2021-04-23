<template>
    <div>
        <h1>Nueva Tarea</h1>
        <form @submit.prevent="addTask(name)">
            <!-- <input type="text" v-model="name" placeholder="Agregar Nueva Tarea"> -->
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" v-model="name" class="form-control">
            </div>
            <button type="submit" class="btn btn-success btn-sm float-right">Registrar</button>    
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Create',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask'])
    }

}
</script>

<style>

</style>