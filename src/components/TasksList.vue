<template>
    <div>
        <div
            v-if="!isLoading"
        >
            <TaskComponent
                v-for="item in tasks"
                :key="item"
                :task="item"
            >
            </TaskComponent>
        </div>
        <div
            v-else
        >
            <v-progress-linear
            indeterminate
            color="cyan"
            >
            </v-progress-linear>
        </div>
    </div>
    
</template>

<script>
import TaskComponent from './TaskComponent.vue'
import { mapActions, mapState } from 'vuex'

export default {
    
    components:{
        TaskComponent
    },
    computed:{
        ...mapState(['tasks','isLoading'])
    },
    methods:{
        ...mapActions(['getEntryTasks'])
    },
    created(){
        this.getEntryTasks()
    }
}
</script>
