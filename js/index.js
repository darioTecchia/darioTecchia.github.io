const tl = new TimelineLite();

const init = () => {

  console.log('mounted');
  $('[lazy-load]').lazyload();

  setTimeout(() => {
    tl.to('#preload', { duration: .20, x: "-100%", ease: 'linear' }).add(() => {
      $('body').removeClass('loading');
    })
  }, 1000);

  $('body').on('click', 'section > .title', function() {
    if(!$(this).closest('section').hasClass('open')) {
      $('section').removeClass('open');
    }
    $(this).closest('section').toggleClass('open');
  });

  $('[fullable]').click(function() {
    $('body').addClass('full-image')
    console.log($(this).attr('src'));
    $('#full-image img').attr('src', $(this).attr('src'));
  })

  $('#full-image').click(function() {
    $('body').removeClass('full-image')
  })

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

