<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="text" @submit="addTodo" />
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
    if (this.text !== '') {
      todosModule.addTodo(this.text);
      this.text = '';
    }
  }
}
</script>
