<template>
  <main>
    <div class="console" @click="focus">
      <div class="bar">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="content">
        <template v-for="command in commands">
          <template v-if="typeof command == 'object'">
            <component :executeCommand="executeCommand" :is="command"></component>
          </template>
          <template v-else>
            <div>{{ command }}</div>
          </template>
        </template>
      </div>
      <div class="input">
        ➜ / <span class="active-folder">dev</span>
        <input ref="input" type="text" v-model="command" @keyup="submit">
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Help from '~/components/Help.vue'
import Welcome from '~/components/Welcome.vue'
import Projects from '~/components/Projects.vue'
import Marika from '~/components/Marika.vue'

export default ({
  data() {
    return {
      commands: [] as (string | any)[],
      command: '' as string,

      help: Help,
      welcome: Welcome,
      projects: Projects,
      marika: Marika,

      historyIndex: 0,
      history: [] as string[],
    }
  },
  methods: {
    submit(e: KeyboardEvent) {
      if (e.code == 'ArrowUp') {
        this.historyUp();
      }

      if (e.code == 'ArrowDown') {
        this.historyDown();
      }

      if (e.code == 'KeyL' && e.ctrlKey) {
        this.commands = [];
      }

      if (e.code == "Enter" && this.command !== '') {
        this.executeCommand(this.command);
      }
    },
    focus() {
      (this.$refs.input as HTMLElement)?.focus();
    },
    executeCommand(command: string) {
      this.historyIndex++;
      this.history.push(command);
      this.commands.push('➜ ' + command);
      switch (command) {
        case 'c':
        case 'clear':
          this.commands = [];
          break;

        case 'h':
        case 'help':
          this.commands.push(this.help);
          break;

        case 'list':
          this.commands.push(this.projects);
          break;

        case 'marika':
          this.commands.push(this.marika);
          break;

        default:
          this.commands.push('command not found: ' + command);
          break;
      }
      this.command = '';
    },
    clamp: (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max),
    historyUp() {
      this.historyIndex = this.clamp(--this.historyIndex, 0, this.history.length)
      this.command = this.history[this.historyIndex];
    },
    historyDown() {
      this.historyIndex = this.clamp(++this.historyIndex, 0, this.history.length);
      this.command = this.history[this.historyIndex];
    }
  },
  mounted() {
    this.commands.push(this.welcome)
  }
})
</script>

<style lang="scss" scoped>
.console {
  width: 90vw;
  height: 90vh;

  background-color: #353535;

  border-radius: 5px;

  .bar {
    background-color: #2c2b29;
    border-radius: 5px 5px 0 0;

    display: flex;
  }

  .dot {
    height: 10px;
    width: 10px;

    margin: 6px 4px;
    border-radius: 100%;

    &.red {
      background-color: #E94B35;
    }

    &.yellow {
      background-color: #f0f000;
    }

    &.green {
      background-color: #1AAF5C;
    }
  }

  .input {
    padding: 0 4px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    .active-folder {
      color: #1AAF5C;
    }

    input {
      border: unset;
      background: transparent;
      color: inherit;
      flex: 1;
      margin-left: 10px;
    }
  }

  .content {
    padding: 4px;
    max-height: calc(100% - 22px - 30px);
    overflow-y: scroll;
  }
}
</style>