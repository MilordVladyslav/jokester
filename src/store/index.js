import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutation.js'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    jokes: []
}

export default new Vuex.Store({
    mutations,
    state,
    actions
})