<script setup>
import { ref } from 'vue';

let message = ref('');
let items = ref(['Piim', 'Viin', 'Õlu', 'Sai']);

function add(){
  if(message.value.trim() !== '') {
    items.value.push(message.value.trim());
  }
  message.value = '';
}
</script>

<template>
    <div class="container content mt-2">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="message" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        
        <ul>
          <li v-for="item in items">{{ item }}</li>
         
        </ul>

    </div>
</template>

<style></style>