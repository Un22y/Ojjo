<template>
    <div class="App">
        <navigation/>
        <router-view></router-view>
        <darkfone>
            <custom-header :title="'Полезные советы и персональные предложения'" :subtitle="'Эксклюзивная рассылка'"/>
            <div class="flex">
                <div class="flex__column">
                    <custom-list v-for="text in subscribe"
                        :text="text.text"
                    />
                </div>
                <simple-input :placeholder="'Ваш E-mail'"/>
            </div>
        </darkfone>
        <Footer/>
    </div>
</template>

<script>
import ProductList from "@/components/Product/ProductList/ProductList"
import Blog from "@/components/Blog/Blog"
import About from "@/components/About/About"
import ProductCard from "@/components/Product/ProductCard/ProductCard"
import Footer from "@/components/Footer/Footer"
import {subscribeFormData as subscribeFormData} from "@/data"

export default {
    components: {
        Blog,
        About,
        ProductList,
        ProductCard,
        Footer,
    },
    methods: {
        getProductData(id) {
            console.log(this.productListData[id])
        },
        inputEMail(event) {
            this.eMail = event.target.value;
        }
    },
    data() {
        return {
            subscribe: subscribeFormData,
        }
    } 
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        font-family: 'Playfair Display';
    }

    a {
        text-decoration: none;
        color: black;
    }

    .App {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 120px;
    }

    ul, li{
        list-style: none;
    }

    .wide-container {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
    }

    .darkfone{
        color: #ffffff;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .flex__section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }


    .line {
        align-self: stretch;
        width: 80%;
        margin: 0 auto;
    }

    /* color for buttons */
    .black__theme {
        background-color: white;
        color: #333333;
        border: 2px solid #333333;
    }

    .light__theme {
        background-color: #333333;
        color: white;
        border: 2px solid #333333;
    }

    .light__theme:hover {
        background-color: white;
        color: #333333;
    }

    .black__theme:hover {
        background-color: #333333;
        color: white;
    }
    
    .transparent__theme {
        background-color: transparent;
        color: white;
        border: 2px white solid;
    }

    .transparent__theme:hover {
        background-color: #333;
    }
</style>