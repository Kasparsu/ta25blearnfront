<script setup>
import { ref } from 'vue';

let joke = ref('');

function reqListener() {
  joke.value = JSON.parse(this.responseText).value;
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://api.chucknorris.io/jokes/random");
req.send();
</script>
<template>
    <h1>{{ joke }}</h1>
</template>