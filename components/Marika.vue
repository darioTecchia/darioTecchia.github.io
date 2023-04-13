<template>
  Ti piacerebbe, Marika.
  <br>
  A Roma, con due gin tonic nel sangue.
  <br>
  💚
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