import VueMq from 'vue-mq'
import Vue from 'vue'

Vue.use(VueMq, {
    breakpoints: {
        // sm: 450,
        md: 1230,
        lg: Infinity,
    }
})

export default VueMq;