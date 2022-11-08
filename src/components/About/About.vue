<template>
<section class="wide-container">
            <custom-header :title="'Настоящая красота здесь!'" :subtitle="'К мероприятиям'"/>
            <div class="button__container">
                <simple-button class="button black__theme"
                    v-for="button in categories"
                >{{button.text}}</simple-button>
            </div>
            <BlogList :list="list"/>
        </section>
</template>
<script>
import Blog from '../Blog/Blog';
import BlogList from '../Blog/BlogList.vue';
import {aboutCategories as aboutCategories} from "@/data"

export default {
    components:{ Blog, BlogList,},
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            categories: aboutCategories,            
        }
    }
}
</script>

<style scoped>
    .button__container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
    }

    .button {
        position: relative;
        display: block;
        min-width: 165px;
        align-self: stretch;
        font-size: 18px;
        z-index: 2;
    }

    .button::after {
        display: block;
        content: '';
        position: absolute;
        top: 6px;
        left: 6px;
        width: 100%;
        height: 100%;
        border: 1px solid #333;
        z-index: 1;
    }
</style>