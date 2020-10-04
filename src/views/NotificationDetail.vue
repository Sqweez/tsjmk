<template>
    <div>
        <Header title="Детали уведомления"/>
        <SideMenu/>
        <div class="page-content-wrapper">
            <div class="container">
                <!-- Notifications Details Area-->
                <div class="notification-area pt-3 pb-2">
                    <h6 class="pl-1">Детали уведомления</h6>
                    <!-- Notification Details-->
                    <div class="list-group-item d-flex py-3"><span class="noti-icon"><i
                            class="lni lni-alarm"></i></span>
                        <div class="noti-info">
                            <h6>Suha just uploaded a new product!</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam nihil magnam
                                accusantium sint voluptatibus illo earum corporis similique libero praesentium excepturi
                                nostrum eos soluta, cum, quis quo perferendis in?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SideMenu from "../components/SideMenu";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, SideMenu, Header},
        data: () => ({}),
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>