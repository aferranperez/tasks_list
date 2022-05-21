import Vue from 'vue'
import Vuex from 'vuex'
import tasksApi from '@/api/tasksApi'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 5,
    isLoading: false,
    isSending: false,
    isTyping: false,
    new_task_description: '',
    tasks: [],

    // Expresiones regulares
    reg_exp_email: /\w+@\w+\.+[a-z]/,
    reg_exp_url: new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i' // fragment locator
    ),
    reg_exp_hashtag : /(?<=[\s>]|^)#(\w*[A-Za-z_]+\w*)\b(?!;)/,
    reg_exp_at : /(?<=[\s>]|^)@(\w*[A-Za-z_]+\w*)\b(?!;)/,
  },

  mutations: {
    addTask(state, data){
      for (let id of Object.keys(data)) {
        state.tasks.push({
            id,
            ...data[id]
        })
      }
    },

    changeTaskDescription(state,description){
      state.new_task_description = description
    }
  },

  actions: {
    async getEntryTasks(context) {
      try{
          const { data } = await tasksApi.get('/tasks.json')
          context.commit('addTask', data)
          
      }catch(error){
          console.log( error)
          alert("Can not connect to RestApi")
      }
    },

    async addTaskById({context, state},id){
      await tasksApi.get(`/tasks/${id}.json`)
        .then(response => {
          // console.log(response.data)
          state.tasks.push({
            id,
            ...response.data
          })

          state.new_task_description = ''
        })
    },

    async saveTask({dispatch, state}){
    
      const dataToSave = {description : `${state.new_task_description}`}
      await tasksApi.post(`tasks.json`, dataToSave)
              .then(response => {
                // console.log(response.data.name)
                dispatch('addTaskById',response.data.name)

              })
              .catch(error => {
                  console.error("There was an error with load of the task!!!" ,error)
              })
    }



  },

})
