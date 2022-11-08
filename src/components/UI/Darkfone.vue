<template>
    <div class="darkfone">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'darkfone',
}
</script>

<style scoped>
    .darkfone{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 60px;
        padding: 100px 0;
        color: #ffffff;
        background-image: url(../../../public/darkfone.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
    }
</style>