<template>
    <div class="container">
        <img src="/listdes.svg" alt="listdes">
        <p>{{text}}</p>
    </div>    
</template>

<script>
export default {
    name: 'custom-list',
    props: {
        text: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        gap: 20px;
    }
</style>