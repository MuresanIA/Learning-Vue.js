<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
// @ is an alias to /src
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bower",
      "koopa",
      "peach",
    ]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingNames };
  },
};
</script>
