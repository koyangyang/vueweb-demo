<template>
    <div>
        <TestComponent :id="id" />
    </div>
</template>

<script setup>
import TestComponent from '~/components/testcomponent.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const id = router.currentRoute.value.params.id
</script>