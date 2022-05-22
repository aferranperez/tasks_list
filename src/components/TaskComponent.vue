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
                        :color="change_color(item[1])"
                        
                    >
                        <v-icon v-if="item[1] == 'email' ">mdi-email</v-icon>
                        <v-icon v-else-if="item[1] == 'hashtag' ">mdi-pound</v-icon>
                        <v-icon v-else-if="item[1] == 'url' "> mdi-link-variant</v-icon>
                        <v-icon v-else-if="item[1] == 'at' ">mdi-at</v-icon>
                        {{editBubbleText( item ) }}
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
            // order: [contenido , type]
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
                                            (this.reg_exp_at.test(description))?"at":
                                                "text"
        },
        change_color(type){
            return  (type == "text")?'white':
                        (type == "email")?'orange':
                            (type == "hashtag")?'purple':
                                (type == "url")?'blue':
                                    'green'

        },
        editBubbleText(item){
            return  (item[1] == "at")?item[0].replace("@",""):
                        (item[1] == "hashtag")?item[0].replace("#",""):
                            (item[1] == "url")?'Link':
                                (item[1] == "email")?'Mail':
                                    item[0]
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