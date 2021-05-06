const app = new Vue({

    el: '#root',
    data:{
        alertActive: false,
        strTodo:'',
        todos:[
            {
                todo:'Scaricare le slide',
                checked: true
            },
            {
                todo:'Riguardare la registrazione',
                checked: false
            },
            {
                todo:'Sistemare bene gli appunti',
                checked: false
            },
            {
                todo:'Abbellire alcuni progetti su GitHub',
                checked: false
            },
        ]
    },

    methods:{

        removeTodo(index){
            this.todos.splice(index,1);
        },

        addTodo(){
        
            if(this.strTodo.length > 2){
                this.todos.push({
                    todo:this.strTodo,
                    checked: false
                });
                this.strTodo = '';
            }else{
                this.alertActive = true;
                setTimeout(()=>{
                    this.alertActive = false;
            
                }, 2000);
            }
        }
    }


});