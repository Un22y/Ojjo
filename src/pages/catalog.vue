<template>
    <div class="App wide-container catalog">
        <ProductList :list="list"/>
        <hr class="line">
        <ProductList :list="list"/>
        <hr class="line">
        <custom-description :isProductDescription="false"/>
    </div>
</template>

<script>
import ProductList from "@/components/Product/ProductList/ProductList"
import {productListData as productListData} from "@/data"
export default {
    components: {ProductList},
    data() {
        return {
            list:productListData
        }
    }
}
</script>

<style>
    .catalog {
        margin-top: 140px;
    }
</style>