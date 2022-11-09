<template>
            <nav class="navigation">
                <div class="flex__container">
                    <div class="flex__nav">
                        <simple-button class="nav__theme">Контрагентам</simple-button>
                        <simple-button class="nav__theme">Дизайнерам</simple-button>
                        <simple-button class="nav__theme">Вакансии</simple-button>
                    </div>
                    <img @click="$router.push('/')" class="logo" src="/Logo.svg"/>
                    <div class="flex__nav">
                        <simple-button class="nav__theme"><img src="/Search.svg"/>Поиск</simple-button>
                        <simple-button class="nav__theme">Вход/Регистрация</simple-button>
                        <simple-button class="nav__theme"><img src="/login.svg" alt=""></simple-button>
                        <simple-button class="nav__theme"><img src="/topcoat_like.svg" alt=""></simple-button>
                    </div>
                </div>
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
    width: 100%;
    padding: 30px 0;
    background-color: #3B3C3D;
}

.flex__container {
    margin: 0 10%;
    align-self: stretch;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:99px;
    
}
.flex__nav {
    display: flex;
    gap: 40px;
}


.logo {
    flex-basis: 200px;
    flex-grow: 100%;
    padding: 0 80px;
}

.nav__theme {
    padding: 0;
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    gap: 16px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    color: white;
    text-transform: none;
}
</style>