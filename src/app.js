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
      text:[{
        'h1':'inspire',
        'p':'text lorem ipsum',
      },
      {
        'h1':'leaaaaaa',
        'p':'aaaaaaaa ipsum',
      },
      {
        'h1':'Lead. Inspire. Win',
        'p':'At EduPrime, it doesn’t matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course',
      },
    ],
      'activeIndex':0,
      'currentImg':0,
      'arrayImg':[
        'edu/img/slider1.jpg',
        'edu/img/slider2.jpg',
        'edu/img/slider3.jpg'
      ],
      'arrayTxt':[
        'edu/img/slider1.jpg',
        'edu/img/slider2.jpg',
        'edu/img/slider3.jpg'
      ],
      'nextImg':'next',
      'prevImg':'prev',
      'timer':null,
    },
    computed: {
    },
    methods: {
      go_next: function(){
        this.currentImg++;
        if(this.currentImg>=this.arrayImg.length){
          this.currentImg=0;
        }
        console.log('go next');
      },
      go_prev: function(){
        this.currentImg--;
        this.activeIndex--;
        if(this.currentImg<0){
          this.currentImg=this.arrayImg.length-1;
        }
        if(this.activeIndex<0){
          this.activeIndex=this.arrayTxt.length-1;
        }
        console.log('go prev');
      },
      intervalCounter: function(){
        if (this.timer == null) {
          this.timer = setInterval(this.go_next,3000);
        }
        console.log('counter');
      },
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
