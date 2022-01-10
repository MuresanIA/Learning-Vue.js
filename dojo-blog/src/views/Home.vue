<template>
  <p>Home</p>

  <p>My name is : {{ name }}</p>
  <p>My age is : {{ age }}</p>
  <button @click="handleClick">click me</button>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  setup() {
    let name = "Mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };
    return {
      name,
      age,
      handleClick
    };
  },
};
</script>
