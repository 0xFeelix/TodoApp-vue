const Counter = {

    data() {
        return {
            title:'Todo App',
            myPlaceholder: 'Add todo list',
            inputValue: '',
            notes: []
        }
    },

    methods: {

        inputChanger(event){
            this.inputValue = event.target.value
        },

        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNewNote(index){
            this.notes.splice(index, 1)
        },
        
        removeAllNotes(index){
            this.notes.splice(index)
        },
    },
}



Vue.createApp(Counter).mount('#app')


