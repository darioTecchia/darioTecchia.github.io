const tl = new TimelineLite();

const init = () => {

  console.log('mounted');
  $('[lazy-load]').lazyload();

  setTimeout(() => {
    tl.to('#preload', { duration: .20, x: "-100%", ease: 'linear' }).add(() => {
      $('body').removeClass('loading');
    })
  }, 1000);

}

const app = Vue.createApp({
  data() {
    return {
      jobs: fakedb.jobs,
      about: fakedb.about,
      skills: fakedb.skills
    }
  },
  mounted: () => {
    init();
  }
});

app.mount('#app')

