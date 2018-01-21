<template>
  <div class="page">
    <div class="banner">
      <img src="static/banner_noise.svg" />
    </div>
    <div class="question">
      Hey Neighbour! Are you:
    </div>
    <v-select v-model="q1" :options="options.q1" :searchable="false">
    </v-select>
    <transition name="fade">
      <div v-if="a[0]==1">
        <div class="question">What kind of noise is being made?</div>
        <v-select v-model="q2_1" :options="options.q2_1" :searchable="false"></v-select>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[0]==2">
        <div class="question">What kind of noise is being made?</div>
        <v-select v-model="q2_2" :options="options.q2_2" :searchable="false"></v-select>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[1]">
        <div class="question">When does the noise occur?</div>
        <v-select v-model="q3" :options="q3options" :searchable="false"></v-select>
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==1 && a[2]>0" class="advice">
				There is no prohibition relating to this kind of noise in the times you’ve described. Any kind of noise can be unreasonable if it can be heard inside your home, but this depends on where you live and the type of noise that’s being made. If your neighbour says that the noise is impacting their wellbeing, or they are finding that they are regularly bothered by it, we suggest having a chat to your neighbour about how you can reduce the impact on their quality of life. <br/><br/>
				In the future, it might help to give your neighbours notice if you’re planning on something that might impact them, such as a party or renovations. We suggest writing a letter to let them know when you’re planning on the change and giving them your contact details so that they can discuss the issue with you.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==2 && a[2]>0" class="advice">
				There is no prohibition relating to this kind of noise in the times you’ve described. Any kind of noise can be unreasonable if it can be heard inside your home, but this depends on where you live and the type of noise that’s being made. If you feel that the noise is impacting your wellbeing, or you’re finding that you’re regularly bothered by it, we suggest having a chat to your neighbour.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==1 && a[2]==0" class="advice">
				It’s prohibited in Victoria to make this kind of noise at this time. We suggest having a chat with your neighbour.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==2 && a[2]==0" class="advice">
				It’s prohibited in Victoria to make this kind of noise at this time. We suggest finding a way to stop making the noise between these hours.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[2]">
				<div class="list-group" v-model="q4">
					<button v-bind:class="{ active: active==1 }" v-on:click="showAction(1)" type="button" class="list-group-item list-group-item-action" v-model="q4">
						I’d like tips on how to have a conversation
					</button>
					<button v-bind:class="{ active: active==2 }" id="action-option-2" v-on:click="showAction(2)" type="button" class="list-group-item list-group-item-action" v-model="q4">I’d prefer to write a letter</button>
					<button v-bind:class="{ active: active==3 }" id="action-option-3" v-on:click="showAction(3)" type="button" class="list-group-item list-group-item-action" v-model="q4">I’d prefer advice on next steps I can take</button>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==1" class="advice">
				Your neighbour might not know that the noise coming from their property is bothering
				you. It’s a good idea to approach your neighbour and have a conversation about it.
				<br/><br/>
				If you’re feeling nervous about have a chat, try preparing a few points about what you
				might say to your neighbour. A good conversation might sound like this:
				<br/>
				<div class="quotes">"Hey neighbour! I’m Kate and I live next door. I wanted to talk with you about what I’ve been hearing- I think it’s a power tool, and I have trouble sleeping when it’s on late at night. Would you be open to using it during the day?”</div>
				<br/> 
				It’s best to stay calm and listen to your neighbour.
				<br/><br/>
				If the conversation doesn’t resolve the problem, or you feel threatened or unsafe, there are other ways you can resolve the problem. Click here for a list of options for help.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==2" class="advice">
				Here is a template letter you can use: www.google.com
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==3" class="advice">
				If you’ve tried to resolve your noise problem with your neighbour and you haven’t been able to agree to a solution that works for you, there are a number of services in Victoria that might be able to help.<br/><br/>
				The <b>Environment Protection Authority</b> is the regulator responsible for the Victorian environment. They have responsibility under legislation for prohibited residential noise.<br/>
				Phone: 1300 372 842<br/>
				Web: <a href="http://epa.vic.gov.au">epa.vic.gov.au</a><br/><br/>
				<b>Dispute Settlement Centre of Victoria</b> help Victorians to resolve issues through free dispute resolution and mediation. They might be able to help you reach a mediated resolution with your neighbour.<br/>
				Phone: 1300 372 888<br/>
				Web: <a href="http://disputes.vic.gov.au">disputes.vic.gov.au</a><br/><br/> 
				If your neighbour is a business:<br/>
				<b>Consumer Affairs Victoria</b> help with disputes and complaint resolution between a consumer and a business. They will only assist with problems or complaints against businesses if you have tried to resolve the problem with the business first.<br/>
				Phone: 1300 558 181<br/>
				Web: <a href="http://consumer.vic.gov.au">consumer.vic.gov.au</a><br/><br/>
				Your local <b>Community Legal Centre</b> might be able to give you advice on how to resolve your dispute.<br/>
				To find your closest community legal centre, visit: <a href="http://fclc.org.au/find_a_clc.php">fclc.org.au/find_a_clc.php</a>
			</div>
		</transition>
	</div>
</template>

<script>
  import data from '../assets/noise.json'

  import Vue from 'vue'
  var VueSelect = require('vue-select')

  Vue.component('v-select', VueSelect.VueSelect)

  export default {
    name: 'Noise',
    data () {
      return {
        a: [],
        q1: '',
        q2_1: '',
        q2_2: '',
        q3: '',
        q4: '',
        active: '',
        vue: Vue,
        show: true,
        options: data,
        date: null
      }
    },
    messages: {
      en: {
        quest2: 'This an d is the first question or is it?',
        q2o1: 'People talking, singing or yelling in a home'
      },
      pt: {
        hi: 'Olá'
      }
    },
    computed: {
      // a computed getter
      q3options: function () {
        // `this` points to the vm instance
        var returnOptions = []
        if (this.a[1]==5|| this.a[1]==6) {returnOptions.push(this.getOptionFromValue(1))}
        if (this.a[1]==8){ returnOptions.push(this.getOptionFromValue(2))}
        if (this.a[1]==9|| this.a[1]==10) {returnOptions.push(this.getOptionFromValue(3))}
        if (this.a[1]==2|| this.a[1]==11) {returnOptions.push(this.getOptionFromValue(4))}
        returnOptions.push(this.getOptionFromValue(0))
        return returnOptions
      }
    },
    watch: {
      q1: function (response) {
        this.a = []
        this.a[0] = parseInt(this.q1.value)
      },
      q2_1: function (response) {
        this.a = this.a.slice(0, 1)
        this.a[1] = parseInt(this.q2_1.value)
      },
      q2_2: function (response) {
        this.a = this.a.slice(0, 1)
        this.a[1] = parseInt(this.q2_2.value)
      },
      q3: function (response) {
        this.a[2] = parseInt(this.q3.value)
      },
      q4: function (response) {
        this.a[3] = parseInt(this.q4)
      }
    },
    methods: {
      showAction: function (number) {
        this.active = number
      },
      setAnswer: function (person) {
        window.console.log('set answer')
        this.a[0] = person
      },
      getOptionFromValue: function(val){
        for (var i = 0; i < this.options.q3.length; i++){
          if (this.options.q3[i].value == val) return this.options.q3[i]
        }
        return null;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style>


.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
	transition: opacity .01s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

body {
  font-family: 'Ubuntu', sans-serif;  
  background-color:#111;
}

.page {
	max-width:500px;
	margin:auto;
	background-color: #00383c;
	min-height:1000px;
  padding-bottom:80px;
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
	border-bottom:4px solid rgba(255,255,255,0.3);
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
    height: 60px;
    float: left;
    padding-left: 15px;
}
.flex-center-vertically {
 }

.option-graphic{
	float:right;
	margin-right:8px;
}
.option-graphic img {
	height:60px;
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
.v-select li>a {
  white-space: normal !important;
}
.dropdown {
  background-color:white;
  border-radius:6px;
  min-height:30px;
  margin-right:15px;
}
.dropdown input {
  position:absolute !important;
  left:0 !important;
}
.selected-tag {
  float:left;
}
.dropdown button {
  display:none;
}
.v-select .selected-tag {
  height: auto !important;
  margin-right: 20px !important;
}

.advice {
  margin:10px;
  color:black;
  background:rgba(255,255,255,0.9);
  padding:15px;
  margin-top:20px;
  border-radius:6px;

}
.list-group {
  margin:10px;
}
.quotes {
  margin:10px;
  font-style: italic;
}
</style>