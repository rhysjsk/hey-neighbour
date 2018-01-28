<template>
  <div class="footer">
    <router-link to="/terms">Terms of Use & Disclaimer</router-link><br/>
    Copyright Octopai 2018
	</div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer {
  text-align:center;
  color:rgba(255,255,255,0.6);
  font-size:12px;
  margin-top:30px;
  position:absolute;
  width:100%;
  bottom:10px;
}
.footer a {
  font-size: 16px;
  color: white;
  padding-bottom: 5px;
  text-decoration: none;
}
</style>
