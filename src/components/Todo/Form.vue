<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="content" name="content" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { todosModule } from "@/store/modules/todos";

export default class Todos extends Vue {
  content = "";

  addTodo(event: any) {
    if (this.content === "") return;
    todosModule.addTodo(this.content);
    this.content = "";
    event.target.reset();
  }
}
</script>
