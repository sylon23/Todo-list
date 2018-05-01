<template>
  
  <div class="wrapper">
      <p class="title">Tasks <span class="count">({{sum}})</span></p>
  
  <div class="form">
    <form action="">
      <input type="text" aria-placeholder="New task" v-model="newTask">
    <button class="addBtn" @click="addTask"><span class="plus">+</span> Add</button>
    </form>
    </div>

    <div class="button">
    <button class="button1" @click="clearDone"> <img src="../assets/checkmark.png">Clear Completed</button>
    <button class="button2" @click="clearAll"> <img src="../assets/trash.png">Clear All</button>
    </div>
    
  

<div class="main">
  <ul>
    <li  v-for=" (todo, index) in toDos" :key="todo.task" :class="{'done': todo.done}" @click="done(todo)">  {{todo.task}}
      <span @click="remove(index)" class="close">X</span>
    </li>
    
  </ul>

</div>
  
</div>

</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      toDos: []
    };
  },

  methods: {
    addTask() {
      if(this.newTask != ""){
        this.toDos.push({ task: this.newTask, done: false });
      }
      this.newTask = "";
    },

    remove(index) {
      this.toDos.splice(index, 1);
    },

    done(todo) {
      todo.done = !todo.done;
    },

    undoneItems(todo){
      return todo.done === false;
    },

   clearDone(){
      this.toDos = this.toDos.filter(this.undoneItems);
    },
    clearAll() {
      this.toDos = [];
    },

    

  },

  computed: {
    sum() {
      var total = this.toDos.filter(this.undoneItems).length;
      return total;
    },

   
    // clearDone(todo,index) {
    //   this.toDos.filter(todo =>todo.done).splice(index, 1);
    // }
  }
};
</script>




<style>
.wrapper {
  background-color: white;
  border: 7px solid gray;
  width: 70%;
  height: 100%;
  margin-left: 200px;
}

.done {
  text-decoration: line-through;
}
.title {
  font-size: 3em;
  /* font-weight: bold; */
  text-align: left;

  margin: 5px 3px;
}

.count {
  color: grey;
}

input {
  width: 87%;
  height: 37px;
  margin-left: 1px;
  
  
}

.button {
  text-align: end;
  margin: 15px;
}

.addBtn {
  height: 43px;
  width: 10%;
  color: white;
  background-color: rgb(90, 190, 230);
  margin-left: 0px;
  font-size: 18px;
  position: relative;
  right: 5px;
  top: 2px;
}

.form {
  margin: 5px;
}

.plus {
  font-weight: bolder;
  font-size: 20px;
}

.close {
  position: absolute;
  right: 20px;
  top: 12px;
  background: red;
  font-size: 1.2em;
  width: 50px;
   color: white;
   text-align: center;
   cursor: pointer;
  /* height:45px; */
}

ul {
  list-style-type: none;
}

li {
  background-color: rgba(226, 222, 222, 0.904);
  /* height: 50px; */
  border: 1px solid grey;
  position: relative;
  right: 20px;
  padding: 15px;
  text-align: left;
  font-size: 20px;
 
  
}

.button1{
  width : 170px;
  background-color: orange
}

.button2{
  width : 140px;
  position: relative;
  top: 6px;
  right: 3px;
  background-color: rgb(255, 94, 0)

}
.button1,.button2 {
  height: 45px;
  margin: -2px;
  padding: 0;
  display: inline-block;
  line-height: 45px;
  text-align: center;
  color: white;
}



</style>;


