<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');
</script>

<template>
    <button @click="message = 'Hello TA25B!'" class="button is-primary">Click me!</button>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <!-- <input type="text" class="input" :value="message" @input="message = $event.target.value"> -->
    <input type="text" class="input" v-model="message">
</template>

<style>

</style>