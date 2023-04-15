<template>
  <div>
    <div class="project-name">{{ project?.name }}</div>
    <div>{{ project?.committee }} - {{ project?.date }}</div>
    <div v-if="project?.description"><br>{{ project?.description }}</div>
    <template v-if="project?.url">
      [<NuxtLink :to="project?.url">go to website</NuxtLink>]
    </template>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

interface Project {
  name: string;
  committee: string;
  date: string;
  url: string;
  description: string;
  tag: string;
}

export default ({
  props: {
    project: Object as PropType<Project>
  },
  data() {
    return {}
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
.project-name {
  color: #E94B35;
}
</style>