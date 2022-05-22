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
                        v-for="(item,index) in order"
                        :key="index"
                        class="ma-2"
                    >
                        {{item[1]}}                    

                    </v-chip>




                    <!-- <v-chip
                        class="ma-2"
                        color="primary"
                        text-color="white"
                    >
                        <v-icon>
                            mdi-at
                        </v-icon>
                        dev-team
                    </v-chip>

                    <v-chip
                        outlined
                        class="ma-2"
                    >
                        algo escrito esta en la casa
                    </v-chip>
                    
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
                    </v-chip> -->

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
            // order:[
            //     ['text','algo escrito'],
            // ]
            order:[],
            color:''
        }
    },
    props:['task'],
    computed:{
        ...mapState(['reg_exp_email','reg_exp_url','reg_exp_hashtag','reg_exp_at']),
    },
    methods:{
        classifier(description){
            return (this.reg_exp_email.test(description))?"email":
                                    (this.reg_exp_hashtag.test(description))?"hashtag":
                                        (this.reg_exp_url.test(description))?"url":
                                            (this.reg_exp_at.test(description))?"at":"text"
        },
        change_color(type){
            (type == "text")?'white':
                (type == "email")?'orange':
                    (type == "hashtag")?'purple':
                        (type == "url")?'blue':'green'
        }
    },

    created() {
        const sub_strings = this.task.description.replace(/\s*$/,"").split(' ')
        
        sub_strings.forEach(element => {
            this.order.push([element,this.classifier(element)])
            console.log(this.order)
        });

        
    },
}
</script>

<style>

</style>