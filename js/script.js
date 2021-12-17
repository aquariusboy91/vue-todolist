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


var app = new Vue({
  el: '#app',
  data: {
    todos: [

        {
            text: 'lorem ipsum gggg',
            done: 'true'
        },
        {
            text: 'lorem ipsum papapa',
            done: 'true'
        },
        {
            text: 'lorem ipsum dododo',
            done: 'true'
        },
        {
            text: 'lorem ipsum eeeee',
            done: 'false'
        },
        {
            text: 'lorem ipsum aaaa',
            done: 'false'
        }
    ]
  },
  methods: {
    remove: function (index) {
        this.todos.splice(index,1)

    }
  }
 
})