<template>
  
  <div>
      <p class="title">To-Do List</p>
  
  <div>
    <form action="">
      <input type="text" v-model="newTask">
    <button @click="addTask" >Add task</button>
    </form>
    
  </div>

<div class="main">
  <ul>
    <li v-for= "(todo, index) in toDos" :key="todo.task"  :class="{'done':todo.done}" @click="done(todo)"> {{todo.task}}
      <span id="close" @click="close(index)">&#10006;</span>
    </li>
    
  </ul>

</div>
  </div>
</template>


<script>
export default {
   name: "App",
  data() {
    return {
      newTask: "",
      toDos: []
    };
  },

  methods: {
    addTask() {
      this.toDos.push({ task: this.newTask, done: false } );
      this.newTask = "";
    },

    done(todo)  {
      todo.done = !todo.done;
    },

    close(index) {
      this.toDos.splice(index, 1);
    }
  }

  
}
</script>

<style>
ul {
  list-style-type: none;
}

.main {
  background-color: grey;
}

#close {
  text-align: end;
}

li:nth-child(even) {
  background-color: pink;
}

.title {
  /* background-color: blue; */
  color: white;
  height: 50px;
}

#app {
  background-color: blue;
  width: 50%;
  height: 300px;
margin-left: 300px;
}

.done{
  text-decoration: line-through;
}

</style>
