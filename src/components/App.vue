<template>
    <div id="app">
        <button class="btn btn-primary" @click="initJokes">Got jokes?</button>
        <!-- <div>{{$store.state}} </div>    -->

        <Joke v-for="(joke, index) in $store.state.jokes" :joke="joke" :key="index" />
    </div>
</template>
<script>

import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
    methods: mapActions([
        'initJokes'
    ]),
    components: {
        Joke
    }
}
</script>

