<template>
  <div>
    <pre>
██████╗  █████╗ ██████╗ ██╗ ██████╗ ████████╗███████╗ ██████╗ ██████╗██╗  ██╗██╗ █████╗ 
██╔══██╗██╔══██╗██╔══██╗██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝██╔════╝██║  ██║██║██╔══██╗
██║  ██║███████║██████╔╝██║██║   ██║   ██║   █████╗  ██║     ██║     ███████║██║███████║
██║  ██║██╔══██║██╔══██╗██║██║   ██║   ██║   ██╔══╝  ██║     ██║     ██╔══██║██║██╔══██║
██████╔╝██║  ██║██║  ██║██║╚██████╔╝   ██║   ███████╗╚██████╗╚██████╗██║  ██║██║██║  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
    </pre>
    Welcome on dariotecchia's website
    <br><br>
    Type "<button class="command-button" @click="executeCommand('h')">h</button>" for help.
    <br>
    Use ↑ and ↓ to navigate through the commands history.
  </div>
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
pre {
  margin-top: 4px;
  width: unset;
  box-shadow: none;
  border: none;
  white-space: pre;
  font-size: 10px;
  line-height: 1;
  font-weight: bold;
  margin-bottom: unset;
}

.command-button {
  border: unset;
  background: unset;
  padding: unset;
  color: #E94B35;

  &:hover {
    text-decoration: underline;
  }
}
</style>