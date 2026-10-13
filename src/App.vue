<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';

let message = ref('');
let i = 1;
let items = ref([
    {id: i++, text: 'Piim', isDone: false},
    {id: i++, text: 'Viin', isDone: true},
    {id: i++, text: 'Õlu', isDone: false},
    {id: i++, text: 'Sai', isDone: true},
]);

function add(){
  if(message.value.trim() !== '') {
    items.value.push({id: i++, text: message.value.trim(), isDone: false});
  }
  message.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
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
        
        <ItemList :items="items" title="All items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
    </div>
</template>

<style></style>