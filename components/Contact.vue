<template>
  <div>
    you can found me on
    <table>
      <tr>
        <td>mail</td><td><NuxtLink to="mailto:dariotecchia@gmail.com">dariotecchia@gmail.com</NuxtLink></td>
      </tr>
      <tr>
        <td>linkedin</td><td><NuxtLink target="_blank" to="https://www.linkedin.com/in/dario-tecchia-3b8934120/">https://www.linkedin.com/in/dario-tecchia-3b8934120/</NuxtLink></td>
      </tr>
      <tr>
        <td>github</td><td><NuxtLink target="_blank" to="https://github.com/darioTecchia">https://github.com/darioTecchia</NuxtLink></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default ({})
</script>

<style lang="scss" scoped>

td {
  vertical-align: baseline;
  padding: 8px;
  padding-bottom: 0px;

  &:first-child {
    padding-left: 0px;
    color: #E94B35;
  }
}
</style>