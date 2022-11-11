<template>
    <div class="details">
        <div class="details__article">
            <div v-show="isProductDescription">
                <h2>Полное описание товара</h2>
            </div>
            <div :class="['article__text', isFull ? 'open' : '' ]">
                Lorem idivsum dolor sit amet consectetur, adipisicing elit. At, reiciendis autem labore quia in dicta doloribus praesentium dolore. Ut esse consequatur aperiam laudantium voluptas necessitatibus optio sequi explicabo soluta voluptatibus amet fugiat eius delectus culpa ipsum ex ducimus voluptate nobis odio omnis, enim veniam. Molestias, nemo? Saepe beatae ipsam ex eveniet quam quibusdam tenetur, veniam itaque ut neque praesentium voluptates dolore eius quaerat ratione ad, blanditiis doloremque sequi facilis temporibus quo fuga? Deleniti, et voluptate similique aliquam reiciendis inventore rem error tempora. Vitae minima quam est commodi repellat, a cumque sint numquam, delectus enim nulla rerum ratione eveniet iure reiciendis?
            </div>
            <button @click="switchDescr" class="article__button">{{buttonText}}</button>
        </div>
        <div class="details__pluses">
            <div class="pluses__item">
                <img src="/order-details-1.svg" alt="">
                <p>Бесплатная доставка</p>
                </div>
                <div class="pluses__item">
                    <img src="/order-details-2.svg" alt="">
                    <p>Индивидуальный дизайн </p>    
                </div>
                <div class="pluses__item">
                    <img src="/order-details-3.svg" alt="">
                    <p>Бесплатная примерка</p>    
                </div>
                <div class="pluses__item">
                    <img src="/order-details-4.svg" alt="">
                    <p>Личный подход</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'custom-description',
    props: {
        isProductDescription: {
            type: Boolean,
        },
    },
    data() {
        return {
            isFull: false,
            buttonText: 'Читать полностью'
        }
    },
    methods: {
        switchDescr() {
            if (!this.isFull) {
                this.isFull = true;
                this.buttonText = 'Скрыть описание';
            } else {
                this.isFull = false;
                this.buttonText = 'Читать полностью';
            }
        }
    }
}
</script>

<style>
.details {
    padding:150px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 100px;
}

.details__article{
    width: 540px;
    height: 240px;
}

.article__text {
    position: relative;
    max-height: 50%;
    overflow: hidden;
}

.open {
    min-height: 100%;
}

.open.article__text::after{
    display:none;
}

.article__text::after{
    z-index: 0;
    content: "";
	position: absolute;
    height: 100%;
    top:0;
	bottom: 0;
	right: 0;
	left: 0;
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 100%);
	pointer-events: none;
}

.article__button {
    text-transform: uppercase;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 5px;
    border: none;
    background-color: transparent;
    border-bottom: 2px #333 dashed;
}

.details__pluses {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:30px 60px
}



.pluses__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 15px;
}

.pluses__item p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
}

</style>