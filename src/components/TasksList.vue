<template>
    <div>
        <TaskComponent
            v-for="item in 5"
            :key="item"
        ></TaskComponent>
        
    </div>
    
</template>

<script>
import TaskComponent from './TaskComponent.vue'

export default {
    components:{
        TaskComponent
    }
}
</script>

<style>

</style>