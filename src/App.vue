<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';

</script>

<template>
    <RouterTabs></RouterTabs>
    <div class="container content mt-2">
        <Suspense>
            <RouterView />
        </Suspense>
    </div>
</template>