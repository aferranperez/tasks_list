<template>
    <v-container
        pt-5
        class="d-flex flex-wrap"
        flat
        >
        <v-btn
            text
            x-large
            @click="prepareNewTask"
        >
            <v-icon
                color="blue"
                class="pa-2"
                >
                mdi-plus-box
            </v-icon>
        </v-btn>   
        
        <v-text-field
            class="pa-2"
            placeholder="Type a new task"
            v-model="changeTaskDescription"
            v-if="add_task != false"
        >
        </v-text-field>

        <v-avatar
            class="pa-2"
            size="40px"
            v-if="add_task != false"
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
        
    }),
    
    computed: {
        ...mapState(['new_task_description','add_task']),
        changeTaskDescription: {
            get(){
                return this.new_task_description
            },
            set(val){
                this.$store.commit('changeTaskDescription', val)
            }
        }
    },

    methods: {
        prepareNewTask(){
            this.$store.commit('change_add_task')
        }
    }
    
    
    


}
</script>

<style>

</style>