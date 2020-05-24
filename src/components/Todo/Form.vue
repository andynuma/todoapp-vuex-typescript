<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="text" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { todosModule } from '@/store/modules/todos';

export default class Todos extends Vue {
  text = '';

  addTodo() {
    console.log(this.text);
    todosModule.addTodo(this.text);
    this.text = '';
  }
}
</script>
