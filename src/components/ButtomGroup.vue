<template>
    
    <v-container
        v-if="add_task != false"
    >
        <v-row
            class="mb-12"
        >
            <v-col
                md="2"
                xs="1"
                sm="1"
            >
                <v-btn
                    :disabled="(isTyping)?false:true"
                >
                    <v-icon
                        color="black"
                        >
                        mdi-arrow-expand
                    </v-icon>
                    <span v-if="$mq == 'lg'">Open</span>
                </v-btn>
            </v-col>

    
            <v-col
                md="8"
                xs="10"
                sm="8"
            >
                <v-btn
                    v-for="(item,index) in icons_buttons"
                    :key="index"
                    elevation="2"
                    text
                    :disabled="(isTyping)?false:true"
                    >
                    <v-icon
                        color="black"
                        >
                        {{item[0]}}
                    </v-icon>
                    <span v-if="$mq == 'lg'">{{item[1]}}</span>
                </v-btn>
                
            </v-col>
            

            <v-col
                md="2"
                xs="1"   
                sm="3"  
            >
                <v-btn
                    @click="cancelTask"
                    v-if="$mq == 'lg'"
                >
                    Cancel
                </v-btn>
                <v-btn 
                    color="primary"
                    @click="check_new_task_description"
                    :loading="isLoading"
                >
                    <span v-if="$mq == 'lg'">{{change_text_buttom}}</span>
                    <v-icon
                        color="black"
                        v-if="!isTyping && $mq == 'md' "
                        >
                        mdi-close
                    </v-icon>
                    <v-icon
                        color="black"
                        v-if="isTyping && $mq == 'md' "
                        >
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-col>
            
        </v-row>
        
    </v-container>
    
</template>

<script>
import { mapActions, mapState} from 'vuex'


export default {

    data() {
        return {
            icons_buttons:[
                ['mdi-calendar', 'Today'],
                ['mdi-lock-open', 'Public'],
                ['mdi-white-balance-sunny', 'Normal'],
                ['mdi-minus-circle-outline', 'Estimation'],
            ]
        }
    },
    computed: {
        ...mapState(['new_task_description', 'add_task','isTyping','isLoading']),
        change_text_buttom:{
            get(){
                return (this.isTyping)?'Add':'Ok'
            }
        }
    },
    methods:{
        ...mapActions(['check_new_task_description']),
        
        cancelTask(){
            this.$store.commit('cancel_add_task')
        }
    },


}
</script>

<style>

</style>