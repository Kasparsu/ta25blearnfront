<script setup>
import { ref } from 'vue';

let joke = ref('');
let url = "https://api.chucknorris.io/jokes/random";
const res = await fetch(url);
const json = await res.json();
joke.value = json.value;

</script>
<template>
    <h1>{{ joke }}</h1>
</template>