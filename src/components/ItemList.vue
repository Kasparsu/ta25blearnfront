<script setup>
defineProps(['items', 'title']);
</script>
<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.text }}
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>
</template>