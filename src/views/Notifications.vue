<template>
    <div>
        <Header
                title="Уведомления"
        />
        <!-- Sidenav Black Overlay-->
        <SideMenu/>
        <!-- Page Content Wrapper-->
        <div class="page-content-wrapper">
            <div class="container">
                <!-- Notifications Area-->
                <div class="notification-area pt-3 pb-2">
                    <h6 class="pl-1">Уведомления</h6>
                    <div class="list-group">
                        <!-- Single Notification-->
                        <router-link class="list-group-item d-flex align-items-center" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center readed" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center readed" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center readed" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                        <router-link class="list-group-item d-flex align-items-center readed" to="/notification-details">
                            <span class="noti-icon"><i class="lni lni-alarm"></i></span>
                            <div class="noti-info">
                                <h6 class="mb-0">Новое уведомление</h6><span>25 июля, 2020</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import SideMenu from "../components/SideMenu";
    import Header from "../components/Header";

    export default {
        components: {Header, SideMenu, Footer},
        data: () => ({}),
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>