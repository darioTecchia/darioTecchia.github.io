<template>
  <ol>
    <li v-for="(project, index) in projects" @click="executeCommand('cd ' + project.tag)">
      {{ project.tag.padEnd(10, '-') }}@ {{ index }} {{ project.committee }} staff 160 {{ project.date }}
      <span class="project-name">{{ project.name }}</span>
    </li>
  </ol>
</template>

<script lang="ts">
import Projects from '~/assets/db/Projects'

export default ({
  props: {
    executeCommand: { type: Function },
  },
  data() {
    return {
      projects: Projects
    }
  },
  mounted() {
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUnmount() {
    console.log('before unmounted');
  }
})
</script>

<style lang="scss" scoped>
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

.project-name {
  color: #E94B35;
}
</style>