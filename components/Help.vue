<template>
  <table>
    <tr>
      <td><button class="command-button" @click="executeCommand('welcome')">welcome</button></td>
      <td>Show welcome message</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('help')">h | help</button></td>
      <td>Print Help (this message)</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('clear')">c | clear</button></td>
      <td>Clear console</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('list')">ls | list</button></td>
      <td>List projects and experiences</td>
    </tr>
    <tr>
      <td><button class="command-button" @click="executeCommand('cd')">cd [tag|index]</button></td>
      <td>Show project detail</td>
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
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
}

table {
  td {
    vertical-align: baseline;
    padding: 8px;
    padding-bottom: 0px;

    &:first-child {
      padding-left: 0px;
      color: #E94B35;
    }
  }
}
</style>