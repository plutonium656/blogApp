import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import Vuex from "vuex"

import store from "./store";

import "./style/global.css"

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
