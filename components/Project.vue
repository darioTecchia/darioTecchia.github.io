<template>
  <pre>
    {{ props?.commandHistory[props.index] }}
  </pre>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Projects from '~/assets/db/Projects'

interface Props {
  commandHistory: string[],
  index: number
}

export default ({

  props: {
    executeCommand: Function,
    props: Object as PropType<Props>
  },
  data() {
    return {
      projects: Projects,
      index: 0
    }
  },
  mounted() {
    console.log(this.props);
    this.index++
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
}

.project-name {
  color: #E94B35;
}
</style>