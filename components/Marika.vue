<template>
  🌷🌈🍟🍒
</template>

<script lang="ts">
export default ({
  props: {
    executeCommand: { type: Function },
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

</style>