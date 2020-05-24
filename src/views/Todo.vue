<template>
  <div>
    <Todos />
  </div>
</template>

<script lang="ts">
import Todos from '@/components/Todo/Todos.vue';

export default {
  name: 'Todo',
  components: {
    Todos,
  },
};
</script>
