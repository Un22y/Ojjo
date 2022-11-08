<template>
    <div class="header">
        <h3 class="subtitle">{{subtitle}}</h3>
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required:true,
        },
        subtitle: {
            type: String,
            required: true,
        }, 
    },
    name: 'custom-header',
}
</script>

<style scoped>
    .subtitle {
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    }

    .title {
        font-size:36px;
        line-height: 40px;
        font-weight: 700;
        text-align: center;
    }
</style>