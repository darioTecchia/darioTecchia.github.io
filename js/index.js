const tl = new TimelineLite();

const app = Vue.createApp({
  data() {
    return {
      works: fakedb.works,
      about: fakedb.about,
      skills: fakedb.skills,
      win: false,
      typing: ""
    }
  },
  computed: {
    maillink() {
      return "mailto: dariotecchia@gmail.com?" +
        `subject=${this.subject}` +
        `&body=${this.request}`;
    }
  },
  mounted: function () {
    window.onkeyup = this.onType;
  },
  beforeDestroy: () => { },
  methods: {
    onType(event) {
      this.typing += event.key
      if (this.typing.indexOf('tecchia') != -1) {
        this.typing = '';
        this.win = true;
      }
    }
  }
});

app.mount('#app')

