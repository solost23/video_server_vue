<script setup>
import { useRouter } from 'vue-router';
let router = useRouter()
function test(id){
    router.push({
        path: `/videos/detail/${id}`, 
    })
}
</script>

<template>
    <div @click="test(11)" id="root">
        视频列表
    </div>
</template>

<style scoped>

</style>
