const tl = new TimelineLite();

const init = () => {

  console.log('mounted');
  $('[lazy-load]').lazyload();

}

const app = Vue.createApp({
  data() {
    return {
      works: fakedb.works,
      about: fakedb.about,
      skills: fakedb.skills,
      subject: "",
      request: ""
    }
  },
  computed: {
    maillink() {
      return "mailto: dariotecchia@gmail.com?" + 
      `subject=${this.subject}` + 
      `&body=${this.request}`;
    }
  },
  mounted: () => {
    init();
  }
});

app.mount('#app')

