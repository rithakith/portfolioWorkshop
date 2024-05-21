<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-if="pendingProjects">Loading</div>
    <div v-if="errorProjects">Error</div>
    <ul>
      <div v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </ul>
  </div>
  <div v-if="pendingBlogs">Loading</div>
  <div v-if="errorBlogs">Error</div>

  <ul>
    <div v-for="blog in blogs" :key="blog.name">
      <h2>{{ blog.name }}</h2>
      <p>{{ blog.description }}</p>
    </div>
  </ul>
</template>

<script setup>
const name = "Rithara Kithmanthie";
const {
  data: projects,
  pendingProjects,
  errorProjects,
} = useFetch("http://localhost:4000/projects");

const {
  data: blogs,
  pendingBlogs,
  errorBlogs,
} = useFetch("http://localhost:4000/blogs");
</script>
