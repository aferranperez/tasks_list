<template>

    <v-container>
        <v-row
        >
            <v-col
                sm="1"
                md="1"
                lg="1"
                cols="1"
            >
                <v-checkbox
                    :disabled="setStateCheckbox"
                    v-model="checkbox"
                ></v-checkbox>
            </v-col>
            <v-col
                sm="11"
                md="11"
                lg="11"
                cols="11"
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
        ...mapState(['reg_exp_email','reg_exp_url','reg_exp_hashtag','reg_exp_at','task_selected_edit']),

        setStateCheckbox:{
            get(){
                return  (this.task_selected_edit == '')?false:
                            (this.task_selected_edit == this.task.id)?false:true

            }
        }
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
        });
    },
    watch:{
        checkbox(newState, oldState){
            if(newState) this.$store.commit('save_id_taskToEdit', [this.task.id,this.task.description])
            else this.$store.commit('reset_id_taskToEdit')
        }
    }
}
</script>
