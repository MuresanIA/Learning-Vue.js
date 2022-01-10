<template>
  <p>Home</p>

  <p>My name is : {{ name }}</p>
  <p ref="p">My age is : {{ age }}</p>
  <button @click="handleClick">click me</button>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  setup() {
    console.log(this);
    let p = ref(null);
    console.log(p, p.value);

    let name = "Mario";
    let age = 30;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "hello, ninjas";
    };
    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>
