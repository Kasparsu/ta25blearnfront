<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

let tabTitles = ref([
    'ToDo',
    'Modals',
]);

let activeTab = ref(0);

let contents = [
    ToDo,
    Modals,
];
</script>

<template>
    <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab=$event"></Tabs>
    <div class="container content mt-2">
        <component :is="contents[activeTab]"></component>
    </div>
</template>