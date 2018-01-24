<template>
  <div class="home">
    <div class="banner">
      <img src="static/banner_home.svg" alt="banner graphic for Hey Neighbour!"/>
    </div>
    <div class="intro-block">
      <div class="intro">
        Hey Neighbour is a simple web app designed to help you better understand how the law regarding neighbourly issues apply to you.
      </div>
      <div class="region">Victoria</div>
    </div>
    <div class="desc"> 
      What is the problem about?
    </div>
    <div class="options">
      <div class="option" v-for="option in options" :class="option.active?'active':'inactive'">
        <router-link :to="option.active?option.name:''">
          <div class="option-title">{{option.title}}</div>
          
          <div class="option-icon">
            <img :src="'static/icon_'+option.name+'.svg'">
          </div>
          <div v-show="!option.active" class="coming-soon">coming soon</div>
          <div class="clearfix"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      options: [
        {name: 'noise', title: 'Noise', active: true},
        {name: 'trees', title: 'Plants / trees', active: true},
        {name: 'animals', title: 'Animals', active: true},
        {name: 'fences', title: 'Fences', active: false},
        {name: 'building', title: 'Building', active: false},
        {name: 'parking', title: 'Parking', active: false},
        {name: 'water', title: 'Water / drainage', active: false},
        {name: 'safety', title: 'Safety', active: false},
        {name: 'other', title: 'Something else', active: false}
      ]
    }
  },
  methods: {
//    pathToIcons: pathToIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  font-family: 'Ubuntu', sans-serif;  
  background-color:#111;
}
.intro-block {
  position:relative;
}
.intro {
  padding: 15px;
  font-size:14px;
    color: rgba(255,255,255,0.7);
    width:400px;
}
.coming-soon {
  position: absolute;
    text-decoration: none;
    color: #ddd;
    margin-top: 18px;
    margin-right: 30px;
    width:500px;
    text-align:center;
}
.inactive .option-title, .inactive .option-icon {
  opacity:0.4;
}
.home {
  max-width:500px;
  margin:auto;
  background-color: #00383c;
  height:1000px;
}
.banner img{
  width:500px;
  max-width:100%;
}
.desc {
  background-color: #00383c;
    color: white;
    font-size: 20px;
    padding: 5px 15px 15px;
}
.option {
  overflow:auto;
  border-bottom:1px solid rgba(0,255,200,0.2);
  padding: 0 0 4px 0;
  cursor:pointer;
  background-color:#00555a;
}
.option.inactive {
  background-color:#353d3e;
  cursor:pointer;
}
.option.inactive a{
  cursor:auto;
}
.option.active:hover {
  background-color:#0d7379;
}
.option-title{
  font-size: 20px;
    color: white;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 48px;
    float: left;
    padding-left: 15px;
}
.flex-center-vertically {
 }

.option-icon{
  float:right;
  margin-right:8px;
}
.option-icon img {
  width:80px;
}
.clearfix{
  clear:both;
}
.dropdown-toggle {
  text-align:left;
}
.dropdown {
  margin-left:15px;
}
.question {
  color: white;
    font-size: 16px;
    padding: 15px 15px 5px;
}

</style>