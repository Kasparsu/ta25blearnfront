<script setup>
import { computed, ref } from 'vue';

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
        
        <h1>All items</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>

        <h1>Done items</h1>
        <ul>
            <li v-for="item in doneItems" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>

        <h1>ToDo items</h1>
        <ul>
            <li v-for="item in toDoItems" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>
    </div>
</template>

<style></style>