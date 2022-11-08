<template>
    <div class="blog__item">
        <img :src=post.image :alt=post.title>
        <span class="blog__item__title">{{post.title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        post:{
            type: Object,
            required:true,
        }
    }
}
</script>

<style>

    .blog__item {
        position: relative;
        display: flex;
        align-items: flex-end;
    }

    .blog__image {
        width: 100;
        height: 100%;
    }
    .blog__item__title {
        pointer-events: none;
        cursor: default;
        position: absolute;
        width: 100%;
        height: 20%;    
        background-color: rgba(0, 0, 0, .3);
        color: #ffffff;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        text-transform: none;
        opacity: 0;
        transition: .3s ease-in;
    }

    .blog__item:hover .blog__item__title {
        opacity: 1;
    } 
</style>