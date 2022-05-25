<template>
    
    <v-container
        v-if="add_task != false"
    >
        <v-row
            class="mb-12"
        >
            <v-col
                sm="2"
                md="1"
                lg="2"
                cols="2"
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
                sm="8"
                md="10"
                lg="8"
                cols="7"
            >
                <v-btn
                    v-for="(item) in icons_buttons"
                    :key="item"
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
                sm="2"
                md="1"
                lg="2"
                cols="3"    
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
                    :loading = isLoading
                >
                    <span v-if="$mq == 'lg'">{{change_text_buttom}}</span>
                    <v-icon
                        color="black"
                        v-if="!isTyping && $mq == 'md' && !isEditing"
                        >
                        mdi-close
                    </v-icon>
                    <v-icon
                        color="black"
                        v-else-if="isTyping && !isEditing && $mq == 'md' "
                        >
                        mdi-plus
                    </v-icon>
                    <v-icon
                        color="black"
                        v-else-if="isEditing && $mq == 'md' "
                        >
                        mdi-floppy
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
        ...mapState(['new_task_description', 'add_task','isTyping','isEditing','isLoading']),
        change_text_buttom:{
            get(){
                return  (this.isTyping && !this.isEditing)?'Add':
                            (!this.isTyping && !this.isEditing)?'Ok':
                                'Save'
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

