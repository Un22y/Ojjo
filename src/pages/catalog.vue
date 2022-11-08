<template>
    <div class="App wide-container">
        <ProductList :list="list"/>
        <hr class="line">
        <ProductList :list="list"/>
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

</style>