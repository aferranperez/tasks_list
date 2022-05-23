<template>
    
    <v-container
        v-if="add_task != false"
    >
        <v-row
            class="mb-12"
        >
            <v-col
                md="2"
                xs="2"
            >
                <v-btn
                    
                    >
                    <v-icon
                        color="black"
                        >
                        mdi-arrow-expand
                    </v-icon>
                    Open
                </v-btn>
            </v-col>

    
            <v-col
                md="8"
                xs="6"
            >
                <v-btn
                    v-for="(item) in icons_buttons"
                    :key="item"
                    elevation="2"
                    text
                    disabled
                    >
                    <v-icon
                        color="black"
                        >
                        {{item[0]}}
                    </v-icon>
                    {{item[1]}}
                </v-btn>
            </v-col>
            

            <v-col
                md="2"
                xs="4"     
            >
                <v-btn
                    @click="cancelTask"
                >
                    Cancel
                </v-btn>
                <v-btn 
                    color="primary"
                    @click="saveTask"
                >
                    Ok
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
        ...mapState(['new_task_description', 'add_task'])
    },
    methods:{
        ...mapActions(['saveTask']),
        
        cancelTask(){
            this.$store.commit('cancel_add_task')
        }
    },


}
</script>

<style>

</style>