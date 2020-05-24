<template>
  <div>
    <Form />
    <ul v-for="todo in getTodos" :key="todo.id">
      <li>
        <span :class="{done: todo.done}">{{ todo.id + 1 }} : {{ todo.content }}</span>
        <button @click="completeTodo(todo.id)">done</button>
        <button @click="deleteTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { todosModule } from "@/store/modules/todos";
import Form from "@/components/Todo/Form.vue";

@Component({
  components: {
    Form
  }
})
export default class Todos extends Vue {
  get getTodos() {
    return todosModule.todos;
  }

  deleteTodo(id: number) {
    todosModule.deleteTodo(id);
  }

  completeTodo(id: number) {
    todosModule.completeTodo(id);
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

li > span.done {
  text-decoration: line-through;
}
</style>
