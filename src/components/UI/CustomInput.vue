<template>
    <form class="subscribe__form">
        <input
            class="form__input"
            :value="eMail"
            @input="eMail = $event.target.value"
            type="text"
            :placeholder="placeholder"
        >
        <simple-button :isLight="true">Отправить</simple-button>
    </form>
</template>

<script>
export default {
    name: "simple-input",
    props: {
        placeholder: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            eMail: '',
        }
    }
}
</script>

<style scoped>
.subscribe__form{
    display: flex;
    align-items: center;
    padding: 20px 22px;
    font-size: 14px;
    background-color: white;
    outline: 1px solid white;
    outline-offset: 15px;
}

.form__input{
    width: 200px;
    height: 45px;
    margin-right: 15px;
}

.form-button {
    font-size: 14px;
    border: 2px #333333 solid;
    background-color: #333333;
    color: #fff;
}
</style>