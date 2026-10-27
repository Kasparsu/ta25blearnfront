<script setup>
import { ref } from 'vue';

</script>

<template>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
        <RouterLink to="/">Go to ToDo</RouterLink>
        <RouterLink to="/modals">Go to Modals</RouterLink>
    </nav>
   
    <main>
        <RouterView />
    </main>
</template>