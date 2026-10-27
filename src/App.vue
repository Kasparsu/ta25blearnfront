<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

let tabTitles = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
]);

let activeTab = ref(0);

let contents = ref([
    'content 1',
    'content 2',
    'content 3',
    'content 4',
]);
</script>

<template>
    <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab=$event"></Tabs>
    <div class="container content mt-2">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>