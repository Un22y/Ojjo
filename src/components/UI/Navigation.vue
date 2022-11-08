<template>
            <nav class="navigation">
                <simple-button class="nav__theme">Контрагентам</simple-button>
                <simple-button class="nav__theme">Дизайнерам</simple-button>
                <simple-button class="nav__theme">Вакансии</simple-button>
                <img @click="$router.push('/')" class="logo" src="/Logo.svg"/>
                <simple-button class="nav__theme"><img src="/Search.svg"/>Поиск</simple-button>
                <simple-button class="nav__theme">Вход/Регистрация</simple-button>
                <simple-button class="nav__theme"><img src="/login.svg" alt=""></simple-button>
                <simple-button class="nav__theme"><img src="/topcoat_like.svg" alt=""></simple-button>
                
            </nav>
</template>

<script>
export default {
    name:'navigation',
}
</script>

<style scoped>
.navigation {
    margin-bottom: -120px;
    /* position: absolute; */
    max-width: 100%;
    align-self: stretch;
    padding: 30px 19%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    background-color: #333;
}

.logo {
    flex-basis: 200px;
    flex-grow: 100%;
    padding: 0 80px;
}

.nav__theme {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    color: white;
    text-transform: none;
}
</style>