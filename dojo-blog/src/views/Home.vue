<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
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
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });
    const stopEffect = watchEffect(() => {
      console.log("Watch effect function ran", search.value);
    });
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
