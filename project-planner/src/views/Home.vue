<template>
  <div class="home">Home</div>
  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <p>{{ project.title }}</p>
    </div>
  </div>
  <div v-else>
    <h3>Loading projects ...</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
