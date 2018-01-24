<template>
  <div class="page">
    <div class="banner">
      <img src="static/banner_animals.svg"  alt="banner graphic for the animals section of Hey Neighbour!"/>
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
    <div class="question">
      Hey Neighbour! Are you:
    </div>
    <v-select v-model="q1" :options="options.q1" :searchable="false">
    </v-select>
    <transition name="fade">
      <div v-if="a[0]==1">
        <div class="question">What is bothering you?</div>
        <v-select v-model="q2_1" :options="options.q2_1" :searchable="false"></v-select>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[0]==2">
        <div class="question">What is bothering your neighbour?</div>
        <v-select v-model="q2_2" :options="options.q2_2" :searchable="false"></v-select>
      </div>
    </transition>
	<transition name="fade">
		<div v-if="a[0]==1 && (a[1]==1 || a[1]==2)" class="advice">
			Your neighbour needs to make sure that their dog, cat or other pet doesn’t come on to your property without your permission.<br/><br/> 
			It’s always best to have a conversation with your neighbour about your concerns before you take anything further as they may not be aware there is a problem. 
		</div>
	</transition>
	<transition name="fade">
		<div v-if="a[0]==1 && a[1]==3" class="advice">
			If your neighbour’s pet is making unreasonable noise over a period of time, it might be considered a nuisance. Your local council will be able to review the issue and take action.<br/><br/>
			It’s always best to have a conversation with your neighbour about your concerns before you take anything further as you may be able to resolve the issue with them, or they may not be aware there is a problem.
		</div>
	</transition>
	<transition name="fade">
		<div v-if="a[0]==1 && a[1]==4" class="advice">
			If you are concerned about the welfare of your neighbour’s pet, telephone the RSPCA on 9224 2222. 
		</div>
	</transition>
    <transition name="fade">
      <div v-if="a[0]==2 && a[1]==1" class="advice">
        Your need to make sure that your dog, cat or other pet doesn’t go on to somebody’s property without their permission.<br/><br/>
        It’s always best to have a conversation with your neighbour to try and resolve the problem that they have identified with your pet. You may consider looking at keeping your pet inside during the day, or securing outdoor fences. 
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[0]==2 && a[1]==2" class="advice">
        If your pet is making unreasonable noise over a period of time, it might be considered a nuisance. Your local council has power to review the issue and take action.<br/><br/>
		It’s always best to have a conversation with your neighbour to try and resolve the problem that they have identified with your pet. You may consider looking at keeping your pet inside during the day, or soundproofing specific areas of your property. 
      </div>
    </transition>
		<transition name="fade">
			<div v-if="a[1]">
        <div class="options-title">
          Actions you can take
        </div>
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
				Your neighbour might not know that an animal from their property is affecting you. It’s a good idea to approach your neighbour and have a conversation about it.
				<br/><br/>
				If you’re feeling nervous about have a chat, try preparing a few points about what you
				might say to your neighbour. A good conversation might sound like this:
				<br/>
				<div class="quotes">"Hey neighbour! I’m Kate and I live next door. I wanted to talk with you about ...”</div>
				<br/> 
				It’s best to stay calm and listen to your neighbour.
				<br/><br/>
				If the conversation doesn’t resolve the problem, or you feel threatened or unsafe, there are other ways you can resolve the problem.  <span class="further-action" v-on:click="showAction(3)">Click here</span> for a list of options for help.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==2" class="advice">
        <a href="https://s3-ap-southeast-2.amazonaws.com/hey-neighbour/docs/HN+-+letter+-+pet.docx" target="_blank">Click here</a> for a template letter you can use.
      </div>
		</transition>
		<transition name="fade">
			<div v-if="active==3" class="advice">
				If you’ve tried to resolve the problem with your neighbour and you haven’t been able to agree to a solution that works for you, there are a number of services in Victoria that might be able to help.<br/><br/>
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
  import data from '../assets/animals.json'

  import Vue from 'vue'
  var VueSelect = require('vue-select')

  Vue.component('v-select', VueSelect.VueSelect)

  export default {
    name: 'Animals',
    data () {
      return {
        a: [],
        q1: '',
        q2_1: '',
        q2_2: '',
        active: '',
        vue: Vue,
        show: true,
        options: data,
        date: null
      }
    },
    messages: {
    },
    computed: {
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
      }
    },
    methods: {
      showAction: function (number) {
        this.active = number
      }
    }
  }
</script>
<style>
.further-action {
  font-weight:bold;
  text-decoration: underline;
  cursor:pointer;
}
.options-title {
      margin-left: 15px;
    margin-top: 30px;
    font-weight: bold;
    color:white;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
