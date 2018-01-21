<template>
  <div class="home">
    <div class="banner">
      <img src="static/banner_home.svg" />
    </div>
    <div class="desc"> 
      What is the problem about?
    </div>
    <div class="options">
      <div class="option" v-for="option in options">
        <router-link :to="option.name">
          <div class="option-title">{{option.title}}</div>
          <div class="option-icon">
            <img :src="'static/icon_'+option.name+'.svg'">
          </div>
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
        {name: 'noise', title: 'Noise'},
        {name: 'plants', title: 'Plants / trees'},
        {name: 'animals', title: 'Animals'},
        {name: 'fences', title: 'Fences'},
        {name: 'building', title: 'Building'},
        {name: 'parking', title: 'Parking'},
        {name: 'water', title: 'Water / drainage'},
        {name: 'safety', title: 'Safety'},
        {name: 'other', title: 'Something else'}
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
    color: #77c4c9;
    font-size: 16px;
    padding: 15px;
}
.option {
  overflow:auto;
  border-bottom:1px solid rgba(0,255,200,0.2);
  padding: 0 0 4px 0;
  cursor:pointer;
  background-color:#00555a;
}
.option:hover {
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