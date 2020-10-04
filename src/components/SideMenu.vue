<template>
    <div>
        <LogoutAlert 
            @cancel="$store.dispatch('toggleLogoutAlert')"
            @confirm="onConfirm"
        />
        <CallAlert />
        <div class="sidenav-black-overlay" id="sidenav-black-overlay" @click="$store.dispatch('toggleSideMenu')"></div>
        <!-- Side Nav Wrapper-->
        <div class="suha-sidenav-wrapper" id="sidenavWrapper">
            <!-- Sidenav Profile-->
            <div class="sidenav-profile">
                <div class="user-profile">
                    <img src="./../assets/logow.svg" alt="">
                </div>
                <div class="user-info">
                    <h6 class="user-name mb-0">Московский Квартал</h6>
                </div>
            </div>
            <!-- Sidenav Nav-->
            <ul class="sidenav-nav">
                <li>
                    <router-link to="/notifications">
                        <i class="lni lni-alarm lni-tada-effect"></i>
                        Уведомления
                        <span class="ml-3 badge badge-warning">3</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/services">
                        <i class="lni lni-empty-file"></i>
                        Услуги
                    </router-link>
                </li>
                <li>
                    <router-link to="/counters">
                        <i class="lni lni-coin"></i>
                        Счетчики
                    </router-link>
                </li>
                <li>
                    <router-link to="/tickets">
                        <i class="lni lni-amazon"></i>
                        Заявки
                    </router-link>
                </li>
                <li>
                    <a @click.prevent="logout">
                        <i class="lni lni-power-switch"></i>
                        Выход
                    </a>
                </li>

            </ul>
            <ul class="sidenav-nav">
                <li>
                    <a @click.prevent="callPhone">
                        <i class="lni lni-phone"></i>
                        Экстренный звонок
                    </a>
                </li>
                <li>
                    <a>
                        <i class="lni lni-envelope"></i>
                        info@tsjmk.ru
                    </a>
                </li>
            </ul>
            <!-- Go Back Button-->
            <div class="go-home-btn" id="goHomeBtn" @click="$store.dispatch('toggleSideMenu')"><i class="lni lni-arrow-left"></i></div>
        </div>
    </div>
</template>

<script>
    import LogoutAlert from "./modals/LogoutAlert";
    import CallAlert from "./modals/CallAlert";
    export default {
        components: {CallAlert, LogoutAlert},
        data: () => ({}),
        methods: {
            logout() {
                this.$store.dispatch('disableMenu');
                this.$store.dispatch('toggleLogoutAlert');
            },
            onConfirm() {
                this.$store.dispatch('toggleLogoutAlert');
                this.$router.push('/login');
            },
            callPhone() {
                this.$store.dispatch('disableMenu');
                this.$store.dispatch('toggleCallAlert');
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .user-info {
        margin-top: 30px;
    }
</style>