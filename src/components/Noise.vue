<template>
  <div class="page">
    <div class="banner">
      <img src="static/banner_noise.svg" alt="banner graphic for the noise section of Hey Neighbour!"/>
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
      <div v-if="a[0]==1 && a[1]==1" class="advice">
        If you are concerned that your neighbour is in an unsafe situation, call the Domestic Violence Resource Centre Victoria on 9486 9866.<br/><br/>
        If you believe that there is an immediate danger to your neighbour’s safety, call police on 000. 
      </div>
    </transition>
    <transition name="fade">
      <div v-if="a[1]">
        <div class="question">When does the noise occur?</div>
        <v-select v-model="q3" :options="q3options" :searchable="false"></v-select>
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[0]==1">
        <div v-if="a[1]==1 || a[1]==2 || a[1]==3">
          <div v-if="a[2] > 1" class="advice" v-html="options.a[0]"></div>
          <div v-else-if="a[2] == 1" class="advice" v-html="options.a[1]"></div>
        </div>
        <div v-else-if="a[1] > 3">
          <div v-if="a[2] == 1" class="advice" v-html="options.a[0]"></div>
          <div v-else-if="a[2] > 1" class="advice" v-html="options.a[1]"></div>
        </div>
			</div>
			<div v-else-if="a[0]==2">
        <div v-if="a[2] == 1" class="advice" v-html="options.a[2]"></div>
        <div v-else-if="a[2] > 1" class="advice" v-html="options.a[3]"></div>
			</div>
		</transition>
		<transition name="fade">
			<div v-if="a[2]">
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
				If the conversation doesn’t resolve the problem, or you feel threatened or unsafe, there are other ways you can resolve the problem. <span class="further-action" v-on:click="showAction(3)">Click here</span> for a list of options for help.
			</div>
		</transition>
		<transition name="fade">
			<div v-if="active==2" class="advice">
				<a href="https://s3-ap-southeast-2.amazonaws.com/hey-neighbour/docs/HN-+Template+letter+-+NOISE.docx" target="_blank">Click here</a> for a template letter you can use.
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
    computed: {
      // a computed getter
      q3options: function () {
        // `this` points to the vm instance
        var returnOptions = []
        if (this.a[0] === 1) {
          if (this.a[1] === 1 || this.a[1] === 2 || this.a[1] === 3 || this.a[1] === 11) { returnOptions.push(this.getOptionFromValue(2)) }
          if (this.a[1] === 4 || this.a[1] === 5 || this.a[1] === 6 || this.a[1] === 7) { returnOptions.push(this.getOptionFromValue(3)) }
          if (this.a[1] === 8 || this.a[1] === 12) { returnOptions.push(this.getOptionFromValue(4)) }
          if (this.a[1] === 9 || this.a[1] === 10) { returnOptions.push(this.getOptionFromValue(5)) }
        } else if (this.a[0] === 2) {
          if (this.a[1] === 2 || this.a[1] === 3 || this.a[1] === 4 || this.a[1] === 5) { returnOptions.push(this.getOptionFromValue(3)) }
          if (this.a[1] === 3) { returnOptions.push(this.getOptionFromValue(4)) }
          if (this.a[1] === 1 || this.a[1] === 7 || this.a[1] === 8 || this.a[1] === 9) { returnOptions.push(this.getOptionFromValue(5)) }
        }
        returnOptions.push(this.getOptionFromValue(1))
        return returnOptions
      }
    },
    watch: {
      q1: function (response) {
        this.a = []
        this.a[0] = parseInt(this.q1.value)
        this.active = 0
      },
      q2_1: function (response) {
        this.a = this.a.slice(0, 1)
        this.a[1] = parseInt(this.q2_1.value)
        this.active = 0
      },
      q2_2: function (response) {
        this.a = this.a.slice(0, 1)
        this.a[1] = parseInt(this.q2_2.value)
        this.active = 0
      },
      q3: function (response) {
        this.a = this.a.slice(0, 2)
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
      getOptionFromValue: function (val) {
        for (var i = 0; i < this.options.q3.length; i++) {
          if (this.options.q3[i].value === val) return this.options.q3[i]
        }
        return null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.further-action {
  font-weight:bold;
  text-decoration: underline;
  cursor:pointer;
}
body {
  color:white;
}
.options-title {
      margin-left: 15px;
    margin-top: 30px;
    font-weight: bold;
}
</style>