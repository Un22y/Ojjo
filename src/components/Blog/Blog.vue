<template>
    <section class="wide-container">
        <custom-header :title="'Лучшие советы по подбору дорогих подарков'" :subtitle="'Полезные статьи'"/>
        <blog-list :list="list"/>
        <simple-button  class="light__theme">Читать наш блог</simple-button>
    </section>
</template>

<script>
import BlogList from './BlogList';
export default {
    components: { BlogList,},
    props: {
        list: {
            type: Array,
            required: true,
        }
    },  

}
</script>

<style scoped>
</style>