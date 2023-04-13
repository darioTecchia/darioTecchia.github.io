<template>
  <table>
    <tr>
      <td><button class="command-button" @click="executeCommand('help')">h or help</button></td>
      <td>Print Help (this message)</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('clear')">c or clear</button></td>
      <td>Clear console</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('list')">ls or list</button></td>
      <td>List projects</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('skill')">skill</button></td>
      <td>List skills</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('bio')">bio</button></td>
      <td>Show short bio</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('contact')">contact</button></td>
      <td>Show contacts</td>
    </tr>
  </table>
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
.command-button {
  border: unset;
  background: unset;
  padding: unset;
  color: #E94B35;

  &:hover {
    text-decoration: underline;
  }
}

table {
  tr {
    td {
      padding-right: 20px;

      &:first-child {
        color: #E94B35;
      }
    }
  }
}
</style>