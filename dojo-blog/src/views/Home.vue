<template>
  Home
  <p>My name is: {{ name }} and My age is: {{ age }}</p>
  <button @click="handleClick">click me</button>
  <button @click="age++">Add 1 to age</button>
  <input type="text" v-model="name">
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src
export default {
  name: "Home",
  setup() {
    const name = ref("Mario");
    const age = ref(30);

    const handleClick = () => {
      (name.value = "luigi"), (age.value = 35);
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
