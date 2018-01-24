<template>
  <div class="home">
    <div class="banner">
      <img src="static/banner_home.svg" alt="banner graphic for Hey Neighbour!"/>
    </div>
    <div class="nav">
      <div class="menu">
        <router-link to="/">
          <img src="/static/icon_menu.svg">
        </router-link>
      </div>
      <div class="region">
        Victoria
      </div>
    </div>
    <div class="intro-block">
      <div class="intro">
        Terms of Use & Disclaimer
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Terms',
  data () {
    return {
    }
  },
  methods: {
//    pathToIcons: pathToIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-block {
  position:relative;
}
.intro {
  padding: 10px 20px;
    font-size: 24px;
    color: white;
    width: 400px;
}
</style>