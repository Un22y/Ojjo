<template>
    <div class="header">
        <div class="header__title">
            <h1>Долго, дорого, богато!</h1>
            <simple-button 
                class="transparent__theme"
                @click="$router.push(`/catalog`)"
            >Каталог изделий</simple-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header {
        background-image: url(../../../public/bg.png);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: flex-end;
        height: 100vh;
        width: 100%;
    }
    .header__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        color: white
    }
</style>