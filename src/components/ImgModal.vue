<script setup>
import Modal from './Modal.vue';

defineProps(['active', 'img']);
</script>
<template>
    <Modal :active="active">
        <p class="image is-4by3">
            <img :src="img" alt="">
        </p>
    </Modal>
</template>