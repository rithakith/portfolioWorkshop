<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-if="pending">Loading</div>
    <ul>
      <div v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </ul>
  </div>
</template>

<script setup>
const name = "Rithara Kithmanthie";
const {
  data: projects,
  pending,
  error,
} = useFetch("http://localhost:4000/projects");
</script>
