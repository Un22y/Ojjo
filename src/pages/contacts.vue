<template>
    <div class="App contacts">
        <div class="contacts__container">
            <div class="contacts__item">
                <h4 class="contacts__title">Главный офис</h4>
                <div class="contacts__description">
                    <div><img src="/geo.svg" alt="location">Невский 140, офис 1-5</div>
                    <div>Невский 140, офис 1-5</div>
                </div>
            </div>
            <div class="contacts__item">
                <h4 class="contacts__title">Телефоны</h4>
                <div class="contacts__description">
                    <a href="tel:+79124585645"><img src="/contact.svg" alt="phonenumber">8(812)4585645</a>
                    <a href="tel:+79124585645">8(812)4585645</a>
                </div>
            </div>
            <div class="contacts__item">
                <h4 class="contacts__title">E-mail</h4>
                <div class="contacts__description">
                    <a href="mail:office@ojjo.com"><img src="/contact.svg" alt="email">office@ojjo.com</a>
                    <a href="mail:sales@ojjo.com">sales@ojjo.com</a>
                </div>
            </div>
            <div class="contacts__item">
                <h4 class="contacts__title">Доп. адреса</h4>
                <div class="contacts__description">
                    <div><img src="/geo.svg" alt="">Невский 142, офис 1-5</div>
                    <div>Загородный, 145, офис 11-15</div>
                </div>
            </div>
        </div>
        <hr class="line">
        <img src="/contact__maps.png" alt="map">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contacts {
        margin-top: 140px;
        gap: 60px;
    }
    .contacts__container {
        display:flex;
        gap: 144px;
    }

    .contacts__item {
        display: flex;
        flex-direction: column;
        gap: 25px;

    }
    .contacts__description {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
</style>