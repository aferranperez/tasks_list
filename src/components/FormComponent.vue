<template>
    <v-container
        pt-5
        class="d-flex flex-wrap"
        flat
        >
        
        <v-icon
            slot="prepend"
            color="blue"
            class="pa-2"
            >
            mdi-plus-box
        </v-icon>
        
        
        <v-text-field
            class="pa-2"
            placeholder="Type a new task"
            v-model="task_description"
        >
        </v-text-field>

        <v-avatar
            class="pa-2"
            size="40px"
            >
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
        </v-avatar>
        <v-container>
            <p>{{new_task_description}}</p>
        </v-container>
    </v-container>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data: () => ({
        task_description: ''
    }),
    
    watch: {
        task_description(newTask, oldTask) {
            this.$store.commit('changeTaskDescription', newTask)
        }
    },
    computed: {
        ...mapState(['new_task_description'])
    }
    
    


}
</script>

<style>

</style>