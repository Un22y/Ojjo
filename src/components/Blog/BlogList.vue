<template>
    <div class="flex__section">
        <blog-item
            v-for="post in list"
            :post="post"
        />
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue';
export default {
    components: { BlogItem },
    props: {
        list: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
    .flex__section {
        gap: 30px;
    }
</style>