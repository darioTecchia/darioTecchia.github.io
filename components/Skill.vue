<template>
  <table>
    <tr>
      <td>skills</td>
      <td>{{ skills.join(' | ') }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import Skill from '~~/assets/db/Skill';

export default ({
  data() {
    return {
      skills: Skill
    }
  }
})
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