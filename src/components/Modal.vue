<script setup>
defineProps(['active']);
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>