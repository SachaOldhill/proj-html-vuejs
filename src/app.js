function initVue() {
  new Vue({
    el: "#app",
    data: {
      nav:[{
        "name": 'Home',
        "dropdown":[{
          "item1":"Driving School",
          "item2":"High School",
        }]
      },
      {
        "name":"Courses",
      }],
      'activeIndex':'',
    },
    computed: {
    },
    methods: {
      barHover: function(bar) {
      this.activeIndex = this.nav.indexOf(bar);
      console.log('enter');
    },
    }
  });
}

function init() {
  initVue();
}
$(init);
