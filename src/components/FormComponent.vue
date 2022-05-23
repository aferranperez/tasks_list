<template>
    <v-container
        pt-5
        class="d-flex flex-wrap"
        flat
        >
        <v-row no-gutters>
            <v-col
                sm="1"
                md="1"
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
            </v-col> 
            <v-col
                sm="10"
                md="10"
            >
                <v-input 
                    style="top: 40px;position: absolute; margin-top: 8px;"
                    v-if="add_task != false"
                >
                    <span
                        v-for="item in task_description_color"
                        :key="item"
                        v-html="item"
                    >
                    </span>
                    <span>|</span>
                    
                </v-input>
                <v-text-field
                    class="pa-2"
                    placeholder="Type a new task"
                    v-model="changeTaskDescription"
                    v-if="add_task != false"
                    style="opacity:0;"
                >
                </v-text-field>
            </v-col>
            <v-col
                sm="1"
                md="1"
            >
                <v-avatar
                    class="pa-2"
                    size="40px"
                    v-if="add_task != false"
                    >
                    <img
                        :style="change_opacity_to_avatar"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    >
                </v-avatar>
            </v-col>
        </v-row>
    
    </v-container>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data: () => ({
        // task_with_color: []
    }),
    
    computed: {
        ...mapState(['new_task_description','add_task','reg_exp_email','reg_exp_url','reg_exp_hashtag','reg_exp_at','task_description_color','isTyping']),
        changeTaskDescription: {
            get(){
                return this.new_task_description
            },
            set(val){
                this.$store.commit('changeTaskDescription', val)
                this.classifyByColor()
            }
        },
        change_opacity_to_avatar:{
            get(){
                return (this.isTyping)?"opacity:1":'opacity:0.5'
            }
        }
    },

    methods: {
        classifier(description){
            return  (this.reg_exp_email.test(description))?"email":
                        (this.reg_exp_hashtag.test(description))?"hashtag":
                            (this.reg_exp_url.test(description))?"url":
                                (this.reg_exp_at.test(description))?"at":
                                    "text"
        },

        prepareNewTask(){
            this.$store.commit('change_add_task')
        },

        classifyByColor(){
            const sub_strings = this.new_task_description.split(' ')
            const classification = []

            sub_strings.forEach(element => {
                (this.classifier(element) == "email") ? classification.push(`<span style="color:#ff9800">${element}&nbsp;</span>`) :
                    (this.classifier(element) == "hashtag") ? classification.push(`<span style="color:#9c27b0">${element}&nbsp;</span>`) :
                        (this.classifier(element) == "url") ? classification.push(`<span style="color:#2196f3">${element}&nbsp;</span>`) :
                            (this.classifier(element) == "at") ? classification.push(`<span style="color:#4caf50">${element}&nbsp;</span>`) :
                                classification.push(`<span>${element}&nbsp;</span>`) 
            });

            this.$store.commit('update_tasks_with_color',classification)
            // this.task_with_color = classification
            // console.log(this.task_with_color)
        }
    },
}
</script>

<style>

</style>