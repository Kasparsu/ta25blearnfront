<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let res = await axios.get('https://rickandmortyapi.com/api/character');
let info = ref({
   next: null,
   prev: null,
   count: 0,
   pages: 0, 
});
info.value = res.data.info;
let characters = ref([]);
characters.value = res.data.results;

async function next(){
    res = await axios.get(info.value.next);
    characters.value = res.data.results;
    info.value = res.data.info;
}
async function prev(){
    res = await axios.get(info.value.prev);
    characters.value = res.data.results;
    info.value = res.data.info;
}
</script>
<template>
    <div class="is-flex is-justify-content-space-between">
        <button class="button is-primary" @click="prev" :disabled="!info.prev">Prev</button>
        <button class="button is-primary" @click="next" :disabled="!info.next">Next</button>
    </div>
    <div class="columns is-multiline">
        <div class="column is-3" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>