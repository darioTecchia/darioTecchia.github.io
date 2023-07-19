<template>
  <main>
    <div class="console" @click="focus">
      <div class="bar">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>

      <div class="content-wrap" ref="content_wrap">
        <div class="content">
          <template v-for="command, index in commands">
            <div>~ /<span class="active-folder">dev</span> {{ commandHistory[index] }}</div>
            <template v-if="typeof command == 'object'">
              <component :executeCommand="executeCommand" v-bind:props="{ index, commandHistory }" :is="command">
              </component>
              <br>
            </template>

            <template v-else>
              <div class="text-command" :innerHTML="command"></div>
            </template>
          </template>

          <div class="input">
            ~ / <span class="active-folder">dev&nbsp;</span>
            <input ref="input" type="text" v-model="commandInput" @keyup="submit">
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Help from '~/components/Help.vue'
import Welcome from '~/components/Welcome.vue'
import Projects from '~/components/Projects.vue'
import Project from '~/components/Project.vue'
import Marika from '~/components/Marika.vue'
import Bio from '~/components/Bio.vue'
import Skill from '~/components/Skill.vue'
import Contact from '~/components/Contact.vue'

export default ({
  data() {
    return {
      commands: [] as (string | any)[],
      commandInput: '' as string,
      commandHistory: [] as string[],

      historyIndex: 0,
      history: [] as string[],

    }
  },
  computed: {
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

      if (e.code == "Enter" && this.commandInput !== '') {
        this.executeCommand(this.commandInput);
      }
    },
    focus() {
      (this.$refs.input as HTMLElement)?.focus();
    },
    executeCommand(command: string) {
      this.historyIndex = this.history.length + 1;
      this.history.push(command);
      // this.commands.push('~ /<span class="active-folder">dev</span> ' + command);
      if (command == 'c' || command == 'clear') {
        this.commandHistory = [];
        this.commands = [];
      }
      else if (command == 'h' || command == 'help') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Help));
      }
      else if (command == 'ls' || command == 'list') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Projects));
      }
      else if (command == 'cd' || /^cd ([0-9]+|[a-zA-Z]+)$/g.test(command)) {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Project));
      }
      else if (command == 'marika') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Marika));
      }
      else if (command == 'bio') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Bio));
      }
      else if (command == 'skill') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Skill));
      }
      else if (command == 'contact') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Contact));
      }
      else if (command == 'welcome') {
        this.commandHistory.push(command);
        this.commands.push(markRaw(Welcome));
      }
      else {
        this.commands.push('command not found: ' + command + '</br></br>');
        this.commandHistory.push(command);
      }
      this.commandInput = '';
      setTimeout(() => {
        console.log('scroll');
        let contentWrap = this.$refs.content_wrap as HTMLElement;
        contentWrap.scrollTop = contentWrap.scrollHeight;
      }, 100)
    },
    clamp: (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max),
    historyUp() {
      this.historyIndex = this.clamp(--this.historyIndex, 0, this.history.length)
      this.commandInput = this.history[this.historyIndex];
      this.$refs.input.selectionStart = this.$refs.input.selectionEnd = this.$refs.input.value.length;
    },
    historyDown() {
      this.historyIndex = this.clamp(++this.historyIndex, 0, this.history.length);
      this.commandInput = this.history[this.historyIndex];
      this.$refs.input.selectionStart = this.$refs.input.selectionEnd = this.$refs.input.value.length;
    }
  },
  mounted() {
    this.commandHistory.push('welcome');
    this.commands.push(markRaw(Welcome));
    // this.commandHistory.push('');
  }
})
</script>

<style lang="scss" scoped>
.console {
  width: 90vw;
  height: 90vh;

  background-color: #353535;

  border-radius: 5px;

  .text-command {
    white-space: break-spaces;
  }

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
    // padding: 0 4px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    input {
      border: unset;
      background: transparent;
      color: inherit;
      flex: 1;
      // margin-left: 10px;
    }
  }

  .content-wrap {
    padding: 4px;
    max-height: calc(100% - 22px);
    overflow-y: scroll;

    .content {
      max-width: 640px;
    }
  }
}
</style>