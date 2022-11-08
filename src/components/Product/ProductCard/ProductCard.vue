<template>
        <section class="product__card">
            <div class="card__images slider-container">
                <div class="card__image_container-big">
                    <img class="card__image-big" :src="imageBig" :alt="product.title"> 
                </div>
                <div class="card__image_container-small">
                    <img class="card__image-small" @click="newGetImage" :src="product.image1" :alt="product.title">
                </div>
                <div class="card__image_container-small">
                    <img class="card__image-small" @click="newGetImage" :src="product.image2" :alt="product.title">
                </div>
                <div class="card__image_container-small">
                    <img class="card__image-small" @click="newGetImage" :src="product.image3" :alt="product.title">
                </div>
            </div>
            <div class="card__description">
                <p class="description__title">{{product.title}}</p>
                <hr>
                <p class="description__text">{{product.text}}</p>
                <p class="description__title">{{product.price}} ₽</p>
                <div class="card__buttons-container">
                    <simple-button class="light__theme">Купить</simple-button>
                    <simple-button class="black__theme">Добавить в корзину</simple-button>
                </div>
            </div>
        </section>
</template>

<script>
import {productListData as productListData} from "@/data"



export default {
    props: {
        id: {
            type: String,
            required:true,
        }
    },
    computed: {
        getId() {

        }
    },
    data() {
        return {
            product: productListData.find(item => item.id == this.id),
            imageBig: '',
        }
    },
    computed: {
        getData() {
            return 
        },
    },
    methods: {
        newGetImage(event) {
            this.imageBig = event.target.src;
        }
    },
    watch: {
        id(newValue) {
            console.log('newValue')
            this.product = productListData.find(item => item.id == newValue)
        }
    }
}
</script>

<style>
.product__card {
    display: flex;
    flex-direction: row;
    max-width: 70%;
    gap: 30px;
}

.card__images{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4,1fr);
    gap:30px;
}

.card__image_container-big{
    grid-area: 1/1/span 3/span 3;
   
}

.card__image-small {
    cursor:pointer;
}

.card__image-big, .card__image-small{
    width: 100%;
    height: 100%;
}


.card__description {
    box-sizing: border-box;
    flex-shrink: 4;
    outline: 2px solid#D6D6D6;
    outline-offset: -10px;
    border: 2px solid #D6D6D6;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 30px;
}

.description__title {
    font-size: 24px;
    color: #333;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 28px;
}

.description__text {
    font-size: 14px;
    line-height: 21px;
}

.card__buttons-container {
   display: flex;
   column-gap: 30px; 
}
</style>