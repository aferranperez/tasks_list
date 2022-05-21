<template>
    
    <v-container>
        <v-row
            class="mb-12"
        >
            <v-col
                md="2"
                xs="2"
            >
                <v-btn
                    elevation="2"
                    text
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
                <v-btn>Cancel</v-btn>
                <v-btn color="primary">
                    Ok
                </v-btn>
            </v-col>
            
        </v-row>
        

    </v-container>
    
</template>

<script>
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

}
</script>

<style>

</style>