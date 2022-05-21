<template>
    <v-container
        pt-5
        class="d-flex flex-wrap"
        flat
        >
        
        <v-icon
            slot="prepend"
            color="blue"
            class="pa-2"
            >
            mdi-plus-box
        </v-icon>
        
        
        <v-text-field
            class="pa-2"
            placeholder="Type a new task"
        >
            
            
        </v-text-field>

        <v-avatar
            class="pa-2"
            size="40px"
            >
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
        </v-avatar>
    </v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>