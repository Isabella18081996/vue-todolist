/* Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni elemento ha due stati (checked o non checked)
- al click dell’elemento avviene il toggle dello status
- al click sulla croce si elimina l’elemento
- clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri
- se è più corto appare un alert che scompare dopo 2 secondi */
/*  bonus: rendere possibile l’eliminazione dell’item solo se prima è stato checkato */


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