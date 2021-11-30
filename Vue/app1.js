const app = Vue.createApp({
    data(){
        return{
            name: ''

        };
    },

    methods:{
        setName(event){
            this.name = event.target.value;

        },

        resetInput(){
            this.name = '';
        }

    }



});

app.mount('#app')