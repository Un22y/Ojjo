<template>
    <div class="products__item">
        <img :src="cardData.image1" :alt="cardData.title">
        <p>{{cardData.type}}</p>
        <h2>{{cardData.brand}}</h2>
        <simple-button @click="$router.push(`/catalog/${this.cardData.id}`)" class="light__theme">{{cardData.price}}</simple-button>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
            required:true,
        }
    },
    methods: {
    },
}
</script>

<style scoped>
    .products__item {
        padding: 35px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }
</style>