<script setup>
import { ref } from 'vue';

let modal1Active = ref(false);

</script>

<template>
    <div class="container content mt-2">
        <button class="button is-primary" @click="modal1Active = true">Open Modal 1</button>
        <div class="modal" :class="{'is-active': modal1Active}">
            <div class="modal-background" @click="modal1Active = false"></div>
            <div class="modal-content">
                <p class="image is-4by3">
                    <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
                </p>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="modal1Active = false"></button>
        </div>
    </div>
</template>