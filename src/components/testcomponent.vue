<template>
    <div>
        <p>{{ id }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
});
</script>
