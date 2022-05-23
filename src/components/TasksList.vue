<template>
    <div>
        
        <TaskComponent
            v-for="item in tasks"
            :key="item"
            :task="item"
        ></TaskComponent>

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
        ...mapState(['tasks'])
    },
    methods:{
        ...mapActions(['getEntryTasks'])
    },
    created(){
        this.getEntryTasks()
    }
}
</script>

<style>

</style>