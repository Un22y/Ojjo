<template>
    <section class="wide-container contacts">
        <div class="allinfo">
            <div class="allinfo__column">
                <p class="column__title">Полезные ссылки</p>
                <hr class="horizont">
                <div class="column__container"> 
                    <button class="contact__info">Доставка</button>
                    <button class="contact__info">Оплата</button>
                    <button class="contact__info">Акции</button>
                    <button class="contact__info">Политика конфиденциальности</button>
                </div>    
            </div>
            <div class="allinfo__column">
                <p class="column__title">оплата</p>
                <hr class="horizont">
                <div class="column__container">
                    <p class="info-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    <div class="payment__container">
                        <button class="contact__info"  href=""><img src="/visa.svg" alt=""></button>
                        <button class="contact__info"  href=""><img src="/master.svg" alt=""></button>
                    </div>
                </div>
            </div>
            <div class="allinfo__column">
                <p class="column__title">контакты</p>
                <hr class="horizont">
                <div class="column__container">
                    <button class="contact__info" href="tel:+78122345655">
                        <img src="/contact.svg" alt="">
                        <p>8 (812) 234-56-55</p>
                    </button>
                    <button class="contact__info" href="tel:+78122345655"><img src="/contact.svg" alt="">8 (812) 234-56-55</button>
                    <button class="contact__info" href="emil:ojjo@ojjo.ru"><img src="/mail.svg" alt="">ojjo@ojjo.ru</button>
                </div>
            </div>
            <div class="allinfo__column">
                <p class="column__title">социальные сети</p>
                <hr class="horizont">
                <div class="column__container">
                    <p class="info-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    <div class="media-container">
                        <img src="/youtube.svg" alt="">
                        <img src="/vk.svg" alt="">
                        <img src="/fb.svg" alt="">
                        <img src="/telegram.svg" alt="">
                        <img src="/etsy.svg" alt="">
                    </div>
                </div>
            </div>
            
        </div>
        <hr class="horizont">    
        <div class="final_footer">
            <p>(c) 2020 OJJO jewelry</p>
            <p>Договор публичной офферты</p>
            <p>Контрагентам</p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.contacts {
    padding-top: 80px;
    padding-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
}

.allinfo{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
}

.column__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.horizont {
    margin-bottom: 30px;
    width: 100%;
}

.column__container {
    display: flex;
    flex-direction: column;
    gap:15px;
}

.contact__info {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    padding: 0 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: .3s;
}

.contact__info:hover {
    color: #333;
    scale: 1.05;
    /* font-weight: 700; */
}

.payment__container {
    display:flex
}

.media-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
}

.final_footer{
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 185px;
}
</style>