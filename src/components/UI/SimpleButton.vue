<template>
    <button :class="[{light__theme: isLight}, 'my_button']">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'simple-button',
    props: {
        isLight: {
            type: Boolean,
        }
    },
}
</script>

<style scoped>
    .my_button {
        display: block;
        font-size: 18px;
        line-height: 22px;
        text-decoration: none;
        text-transform: uppercase;
        max-width: max-content;
        padding: 15px 35px;
        transition: .3s ease-out;
        box-shadow: none;
    }
</style>