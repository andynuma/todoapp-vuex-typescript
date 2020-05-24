<template>
  <div>
    <Form />
    <ul v-for="todo in getTodos" :key="todo.id">
      <li>
        {{ todo.id + 1 }} : {{ todo.content }}
        <button>edit</button>
        <button @click="deleteTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { todosModule } from '@/store/modules/todos';
import Form from '@/components/Todo/Form.vue';

@Component({
  components: {
    Form,
  },
})
export default class Todos extends Vue {
  get getTodos() {
    return todosModule.todos;
  }

  deleteTodo(id: number) {
    todosModule.deleteTodo(id);
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
