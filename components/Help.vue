<template>
  <ol>
    <li>help</li>
    <li>help</li>
  </ol>
</template>

<script lang="ts">
export default ({
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