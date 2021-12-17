// Questa volta però ogni todo sarà 
// un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false)
//  che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista, 
// un item per ogni todo.
// Se la proprietà done è uguale a true, 
// visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: 
// cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante 
// “aggiungi”: cliccando sul pulsante, il testo digitato
//  viene letto e utilizzato per creare un nuovo todo, che 
//  quindi viene aggiunto alla lista dei todo esistenti.


var app = new Vue({
  el: '#app',
  data: {
      todo: '',
        image: { backgroundImage: "url(todolist.jpg)"},
    todos: [

        {
            text: 'Zucchero',
            done: 'true'
        },
        {
            text: 'Uova',
            done: 'true'
        },
        {
            text: 'Pasta',
            done: 'true'
        },
        {
            text: 'Pollo',
            done: 'false'
        },
        {
            text: 'Pizza',
            done: 'false'
        }
    ]
  },
  methods: {
    remove: function (index) {
        this.todos.splice(index,1)

    },
    addObj: function () {
        this.todos.push({ text : this.todo});
       console.log(this.todo)
        
    }
}
 
})