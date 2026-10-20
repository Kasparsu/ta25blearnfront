<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
import ImgModal from './components/ImgModal.vue';

let modal1Active = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);

</script>

<template>
    <div class="container content mt-2">
        <button class="button is-primary" @click="modal1Active = true">Open Modal 1</button>
        <button class="button is-warning" @click="modal2Active = true">Open Modal 2</button>
        <button class="button is-danger" @click="modal3Active = true">Open Modal 3</button>

        <ImgModal :active="modal1Active" @close="modal1Active = false" img="https://picsum.photos/1280/960?r=1"></ImgModal>
        <ImgModal :active="modal2Active" @close="modal2Active = false" img="https://picsum.photos/1280/960?r=2"></ImgModal>
        <Modal :active="modal3Active" @close="modal3Active = false">
            <div class="box">I'm in a box.</div>
        </Modal>
    </div>
</template>