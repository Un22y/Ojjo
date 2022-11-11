<template>
    <div class="header">
        <div class="header__title">
            <h1>Долго, дорого, богато!</h1>
            <simple-button 
                class="transparent__theme"
                @click="$router.push(`/catalog`)"
            >Каталог изделий</simple-button>
        </div>
        <div class="partners">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
                <img class="partners-img" src="/Rectangle 2.png" alt="">
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
        gap: 80px;
    }
    .header__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        color: white
    }

.partners {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 58%;
    gap: 14px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 2px solid #ffffff;
}

.partners-img {
    border-right: 2px #ffffff solid;
    padding-right: 14px;
}

.partners-img:last-child {
    border:none;
}
</style>