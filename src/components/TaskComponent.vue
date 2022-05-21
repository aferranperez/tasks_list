<template>

    <v-container>
        <v-row
        >
            <v-col
                md="1"
            >
                <v-checkbox
                    v-model="checkbox"
                ></v-checkbox>
            </v-col>

            <v-col
                md="11"
                class="d-flex"
            >
                <div :class="`align-self-center`">

                    <v-chip
                        class="ma-2"
                        color="primary"
                        text-color="white"
                    >
                        <v-icon>
                            mdi-at
                        </v-icon>
                        dev-team
                    </v-chip>

                    <span>algo escrito</span>
                    
                    <v-chip
                        class="ma-2"
                        color="purple"
                        text-color="white"
                    >
                        <v-icon>
                            mdi-pound
                        </v-icon>
                        alldone
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="orange"
                        text-color="white"
                    >
                        <v-icon>
                            mdi-email
                        </v-icon>
                        Mail
                    </v-chip>

                    <v-chip
                        class="ma-2"
                        color="blue"
                        text-color="white"
                    >
                        <v-icon>
                            mdi-link-variant
                        </v-icon>
                        Link
                    </v-chip>

                    
                </div>
                
            </v-col>
        </v-row>

        {{task}}

    </v-container>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            checkbox: false,
            order:[
                ['text','algo escrito'],
                ['at', 'dev_team'],
                ['hashtag', 'alldone'],
                ['email','Mail'],
                ['link','Link']
            ]
        }
    },
    props:['task'],
    computed:{
        ...mapState(['reg_exp_email','reg_exp_url','reg_exp_hashtag','reg_exp_at'])
    },
    methods:{
        classifier(){
            
        }
    }
}
</script>

<style>

</style>