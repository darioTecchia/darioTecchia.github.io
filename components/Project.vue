<template>
  <div>
    <div v-if="!project">
      project not found
    </div>
    <div v-if="props?.commandHistory[props.index] == 'cd' || !project">
      <table class="usage">
        <tr>
          <td>usage:</td>
          <td>
            cd [<span v-for="(tag, index) in projectsTags">
              <span v-if="index != 0"> | </span>
              <span @click="executeCommand('cd ' + tag)" class="project-name">{{ tag }}</span>
            </span>]
          </td>
        </tr>
        <tr>
          <td></td>
          <td>cd [ from 0 to {{ projects.length - 1 }} ]</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <ProjectDetail :project="project"></ProjectDetail>
    </div>
  </div>
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
    }
  },
  mounted() {
    console.log(this.props);
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUnmount() {
    console.log('before unmounted');
  },
  computed: {
    project() {
      let projectIndex = this.props?.commandHistory[this.props?.index].split(' ')[1];
      if (parseInt(projectIndex as string)) {
        return this.projects[parseInt(projectIndex as string)]
      } else {
        return this.projects.find(p => p.tag == projectIndex)
      }
    },
    projectsTags() {
      return this.projects.map(p => p.tag)
    }
  }
})
</script>

<style lang="scss" scoped>
.usage {
  td {
    vertical-align: baseline;
    padding: 8px;
  }

  .project-name {
    color: #E94B35;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>