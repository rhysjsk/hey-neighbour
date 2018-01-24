<template>
  <div class="page">
    <div class="banner">
      <img src="static/banner_trees.svg"  alt="banner graphic for the trees and plants section of Hey Neighbour!"/>
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
        <div class="question">What’s the problem with the tree?</div>
        <v-select v-model="q2_1" :options="options.q2_1" :searchable="false"></v-select>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[0]==2">
        <div class="question">What does your neighbour think the problem is with the tree?</div>
        <v-select v-model="q2_2" :options="options.q2_2" :searchable="false"></v-select>
      </div>
    </transition>
		<transition name="fade">
			<div v-if="a[0]==1 && a[1]==1" class="advice">
				In some councils, some trees are protected and can’t be cut without council permission. Before you prune your neighbour’s tree or plant, call you local council to make sure that you don’t need a permit.<br/><br/>
        If it’s ok to prune the tree, you are allowed to cut any branches or roots as long as they are your property. While cutting them, you cannot go onto your neighbours property or cause damage to the tree. What you cut off remains your neighbour’s property and you must return it to them.<br/><br/> 
        It’s always a better idea to talk to your neighbour about how the tree or plant is affecting you before you prune their tree. 
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==1 && a[1]==2" class="advice">
				If your neighbour’s tree has damaged your property they may be liable to pay for the damage. <a href="https://www.liv.asn.au/find-a-lawyer">Click here</a> to use the LIV’s find a lawyer service, or <a href="http://www.fclc.org.au/find_a_clc.php">click here </a> to search for your nearest Community Legal Centre. <br/><br/>
        It’s always a better idea to talk to your neighbour about how the tree or plant is affecting you before you seek advice from a lawyer. 
			</div>
		</transition>
    <transition name="fade">
      <div v-if="a[0]==1 && a[1]==3" class="advice">
        There is no law or rules in Victoria about trees or plants blocking lights or views- it’s something that you will need to discuss with your neighbour. It’s always a good idea to speak with your neighbour about how their tree or plant is affecting you. 
      </div>
    </transition>
		<transition name="fade">
			<div v-if="a[0]==2 && a[1]==1" class="advice">
				In some councils, some trees are protected and can’t be cut without council permission. It might help to call your local council to see if a permit is needed.<br/><br/>
        If it is not a protected tree, your neighbour is allowed to cut any branches or roots as long as they on their property. While cutting them, you can’t go onto your property or cause unnecessary damage to the tree. What they cut off remains your property and you must be returned to you.<br/><br/>
        It’s always a better idea to talk to your neighbour about how the tree or plant is affecting you before you prune their tree. 
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==2 && a[1]==2" class="advice">
				If your tree has damaged your neighbour’s property you may be liable to pay for the damage.<br/><br/>
        It’s always a better idea to talk to your neighbour about how you can address the issue to avoid escalation of the problem. 
			</div>
		</transition>
    <transition name="fade">
      <div v-if="a[0]==2 && a[1]==3" class="advice">
        There is no law or rules in Victoria about trees or plants blocking lights or views- it’s something that you will need to discuss with your neighbour. It’s always a good idea to speak with your neighbour about how their tree or plant is affecting you. 
      </div>
    </transition>
		<transition name="fade">
			<div v-if="a[1]">
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
				Your neighbour might not know that the tree coming from their property is affecting you. It’s a good idea to approach your neighbour and have a conversation about it.
				<br/><br/>
				If you’re feeling nervous about have a chat, try preparing a few points about what you
				might say to your neighbour. A good conversation might sound like this:
				<br/>
				<div class="quotes">"Hey neighbour! I’m Kate and I live next door. I wanted to talk with you about the tree branches that come into our yard- I worry that my kids might hurt themselves on one of them. Would you be open to me cutting back the branches where they are on my property?”</div>
				<br/> 
				It’s best to stay calm and listen to your neighbour.
				<br/><br/>
				If the conversation doesn’t resolve the problem, or you feel threatened or unsafe, there are other ways you can resolve the problem. <span class="further-action" v-on:click="showAction(3)">Click here</span> for a list of options for help.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==2" class="advice">
        <a href="https://s3-ap-southeast-2.amazonaws.com/hey-neighbour/docs/HN+-+Template+letter-+trees.docx" target="_blank">Click here</a> for a template letter you can use.
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
  import data from '../assets/trees.json'

  import Vue from 'vue'
  var VueSelect = require('vue-select')

  Vue.component('v-select', VueSelect.VueSelect)

  export default {
    name: 'Trees',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
