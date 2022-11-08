<template>
    <div class="App">
        <ProductCard
            :id="$route.params.id"
        />
        <ProductList :list="productList"/>
        <h1>Страница с id = {{$route.params.id}}</h1>   
    </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard/ProductCard"
import ProductList from "@/components/Product/ProductList/ProductList"
import {productListData as productListData} from "@/data"
export default {
    components: {ProductCard, ProductList},
    data() {
        return {
            productList: productListData, 
        }
    }
}
</script>

<style>

</style>