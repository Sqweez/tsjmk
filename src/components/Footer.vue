<template>
    <div class="footer-nav-area" id="footerNav">
        <div class="container h-100 px-0">
            <div class="suha-footer-nav h-100">
                <ul class="h-100 d-flex align-items-center justify-content-between">
                    <li class="active" style="margin-right: -5px">
                        <router-link to="/home"><i class="lni lni-home"></i>
                            Домой
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services">
                            <i class="lni lni-clipboard"></i>
                            Услуги
                        </router-link>
                    </li>
                    <li style="margin-right: 5px">
                        <router-link to="/notifications">
                            <i class="lni lni-alarm"></i>
                            Уведомления
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/tickets">
                            <i class="lni lni-bubble"></i>
                            Обращения
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contacts">
                            <i class="lni lni-phone"></i>
                            Контакты
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
    @media (max-width: 386px) {
        li > a {
            font-size: 11px!important;
        }
    }

    @media (max-width: 340px) {
        li > a {
            font-size: 10px!important;
        }
    }
</style>