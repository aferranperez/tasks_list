<template>
  <v-app>
    <v-main>
      <v-container>
        <FormComponent></FormComponent>
        <ButtomGroup></ButtomGroup>
        <v-divider></v-divider>
        <TasksList></TasksList>
      </v-container>
      <p>{{contador}}</p>
    </v-main>
    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import FormComponent from './components/FormComponent.vue'
import ButtomGroup from './components/ButtomGroup.vue'
import TasksList from './components/TasksList.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',

  components: {
    FormComponent,
    ButtomGroup,
    TasksList
  },
  computed: {
    ...mapState(['contador'])
  }

};
</script>
