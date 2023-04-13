<template>
  <table>
    <tr>
      <td>h or help</td>
      <td>Print Help (this message)</td>
    </tr>
    <tr>
      <td>c or clear</td>
      <td>Clear console</td>
    </tr>
    <tr>
      <td>ls or list</td>
      <td>List projects</td>
    </tr>
    <tr>
      <td>skill</td>
      <td>List skills</td>
    </tr>
    <tr>
      <td>bio</td>
      <td>Show short bio</td>
    </tr>
    <tr>
      <td>contact</td>
      <td>Show contacts</td>
    </tr>
  </table>
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

<style lang="scss" scoped>
table {
  tr {
    td {
      padding-right: 20px;

      &:first-child {
        color: #E94B35;
        font-weight: bold;
      }
    }
  }
}
</style>