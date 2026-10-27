<script setup>
defineProps(['titles', 'active']);
</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="(title,key) in titles" :class="{'is-active': active === key}" @click="$emit('change', key)">
                <a>{{ title }}</a>
            </li>
        </ul>
    </div>
</template>