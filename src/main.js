// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('date-picker', {
  template: '<input/>',
  props: [ 'dateFormat' ],
  mounted: function () {
    var self = this;
    $(this.$el).datepicker({
      dateFormat: this.dateFormat,
      onSelect: function(date) {
        self.$emit('update-date', date)
      }
    });
  },
  beforeDestroy: function() {
    $(this.$el).datepicker('hide').datepicker('destroy')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
