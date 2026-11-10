<script setup>
import { computed } from 'vue';

let props = defineProps({
    class: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        validator(value, props) {
            // The value must match one of these strings
            return [
                'success',
                'warning',
                'danger',
                'info',
                'link',
                'primary',
                'ghost',
                'text',
                'black',
                'dark',
                'light',
                'white',
            ].includes(value)
        }
    }
});

let cssClass = computed(() => props.class + ' is-' + props.color)
</script>
<template>
    <button class="button" :class="cssClass">
        <slot></slot>
    </button>
</template>