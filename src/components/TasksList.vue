<template>
    <div>
        
        <TaskComponent
            v-for="(item,index) in tasks"
            :key="index"
            :task="item"
        ></TaskComponent>
        
        <v-alert
            border="left"
            dismissible
            prominent
            shaped
            type="error"
            style="padding-top:30px"
            v-if="haveError"
        >
        {{text_error}}
        </v-alert>
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
        ...mapState(['tasks','haveError','text_error'])
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