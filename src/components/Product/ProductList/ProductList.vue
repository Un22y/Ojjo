<template>
    <div class="products__list">
        <ProductCardSmall 
            v-for="product in list" 
            :cardData="product"
        />
    </div>
</template>

<script>
import ProductCardSmall from '../ProductCardSmall/ProductCardSmall';
export default {
    components: {ProductCardSmall},
    props: {
        list: {
            type: Array,
            required:true,
        },
    },
}
</script>

<style scoped>
    .products__list {
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
</style>