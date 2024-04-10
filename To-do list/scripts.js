
const todosApp = {
  data() {
    return {
        todos: [],
        newTodo: {
            done: false
        }
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("O texto da tarefa é necessário");
      }
    }
  },
  beforeCreate() {
    console.log(this.todos);
  },
  created() {
    console.log(this.todos);
  }

}

Vue.createApp(todosApp).mount('#app');
