<template>
    <div class="App">
        <MainHeader/>
        <About :list="about"/>
        <darkfone>
            <custom-header :title="'Посетите наши салоны в Москве'" :subtitle="'Не знаете, что выбрать?'"/>
            <article class="salons__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</article>
            <simple-button class="black__theme">Наши салоны</simple-button>
        </darkfone>
        <Blog :list="blog"/>
    </div>
</template>

<script>
import ProductList from "@/components/Product/ProductList/ProductList"
import Blog from "@/components/Blog/Blog"
import About from "@/components/About/About"
import ProductCard from "@/components/Product/ProductCard/ProductCard"
import MainHeader from "@/components/MainHeader/MainHeader"
import {blogData as blogData, aboutData as aboutData, productListData as productListData} from "@/data"


export default {
    components: {
        Blog,
        About,
        ProductList,
        ProductCard,
        MainHeader,
    },
    data() {

        return {
            blog: blogData,
            about: aboutData,
            productList:productListData,
            
        }
    },
    methods: {
        inputEMail(event) {
            this.eMail = event.target.value;
        }
    } 
}
</script>

<style>
.flex {
    display: flex;
    gap: 95px;
}
.salons__text {
    max-width: 730px;
    text-align: center;
    font-size: 18px;
}
.flex__column {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>