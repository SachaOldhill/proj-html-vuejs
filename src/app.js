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
    },
    computed: {
    },
    methods: {
    }
  });
}

function init() {
  initVue();
}
$(init);
