<template>
    <div class="header-area" id="headerArea">
        <div class="container h-100 d-flex align-items-center justify-content-between">
            <!-- Logo Wrapper-->
            <div class="back-button" v-if="!mainPage">
                <a @click.prevent="$router.back()"><i class="lni lni-arrow-left"></i></a>
            </div>
            <!-- Page Title-->
            <div class="page-heading" v-if="!mainPage">
                <h6 class="mb-0">{{ title }}</h6>
            </div>
            <div class="logo-wrapper" v-if="mainPage">
                <router-link to="/home">
                    <img src="./../assets/logow.svg" alt="">
                </router-link>
            </div>
            <!-- Search Form-->
            <div class="top-search-form" v-if="mainPage">
                <form action="#" method="post">
                    <input class="form-control" type="search" placeholder="Начните поиск">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <!-- Navbar Toggler-->
            <div class="suha-navbar-toggler d-flex flex-wrap" id="suhaNavbarToggler" ref="suhaNavbarToggler"
                 @click="$store.dispatch('toggleSideMenu')"><span></span><span></span><span></span></div>
        </div>
    </div>
</template>

<script>
    import side_menu from "../mixins/side_menu";

    export default {
        data: () => ({}),
        methods: {},
        computed: {},
        props: {
            mainPage: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: 'Страница'
            }
        },
        mixins: [side_menu]
    }
</script>

<style scoped lang="scss">
    .logo-wrapper {
        img {
            width: 35px;
        }
    }
</style>