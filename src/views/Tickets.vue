<template>
    <div>
        <Header title="Обращения"/>
        <!-- Sidenav Black Overlay-->
        <SideMenu/>
        <!-- Page Content Wrapper-->
        <div class="page-content-wrapper">
            <div class="container">
                <!-- Notifications Area-->
                <div class="notification-area pt-3">
                    <h6 class="pl-1">Уведомления</h6>
                    <div class="list-group">
                        <!-- Single Notification-->
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/chat">
                            <button @click.prevent="deleteTicket" class="delete-button">&times;</button>
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Водоснабжение и канализация</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                                    vitae.</p>
                                <span>9/07/20 14:07</span>
                            </div>
                        </router-link>
                        <div class="form-group mb-3 button-container container">
                            <button class="btn btn-success btn-lg w-100" @click="$router.push('/new-ticket')">Добавить обращение</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SideMenu from "../components/SideMenu";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, SideMenu, Header},
        data: () => ({}),
        methods: {
            deleteTicket() {
                alert('Здесь будет заглушка об удалении')
            }
        },
        computed: {},
    }
</script>

<style scoped>
    .list-group-item {
        position: relative;
    }

    .delete-button {
        position: absolute;
        right: 3%;
        top: 5%;
        font-size: 2em;
        border: none;
        color: #ffffff;
        background: transparent;
    }

    a:focus, a:active, a:visited, a:hover {
        text-decoration: none !important;
    }

    .button-container {
        position: fixed;
        bottom: 6%;
        left: 0;
        right: 0;
        z-index: 999;
    }

    .notification-area {
        padding-bottom: 65px;
    }
</style>