<template>
    <div>
        <Header title="Контакты"/>
        <SideMenu/>
        <div class="page-content-wrapper">
            <div class="container">
                <div class="about-content-wrap py-3">
                    <img class="mb-3 mx-auto text-center d-block" src="./../assets/logow.svg" alt="">
                    <h5 class="text-center">ТСЖ "Московский квартал"</h5>
                    <ul class="mb-3">
                        <li class="pl-2"><i class="lni lni-envelope mr-1"></i>E-mail: info@tsjmk.ru</li>
                        <li class="pl-2"><i class="lni lni-website-alt mr-1"></i>http://tsjmk.ru
                        </li>
                    </ul>
                    <h6>Управляющая:</h6>
                    <ul class="mb-3">
                        <li class="pl-2"><i class="lni lni-user mr-1"></i>Парнас Ирина Анатольевна</li>
                        <li class="pl-2"><i class="lni lni-phone mr-1"></i>тел.: 8-911-135-80-59</li>
                        <li class="pl-2"><i class="lni lni-alarm-clock mr-1"></i>пн-пт с 9:00 до 16:00</li>
                    </ul>
                    <h6>Диспетчерская служба:</h6>
                    <ul class="mb-3">
                        <li class="pl-2"><i class="lni lni-phone mr-1"></i>612-89-469</li>
                        <li class="pl-2"><i class="lni lni-phone mr-1"></i>8-911-136-06-63</li>
                        <li class="pl-2"><i class="lni lni-alarm-clock mr-1"></i>Приём заявок круглосуточно. Выдача и
                            приём документов с 9:00 до 18:00
                        </li>
                    </ul>
                    <h6>Охрана:</h6>
                    <ul class="mb-3">
                        <li class="pl-2"><i class="lni lni-phone mr-1"></i>8-900-652-94-03</li>
                        <li class="pl-2"><i class="lni lni-phone mr-1"></i>8-900-652-93-29</li>
                    </ul>
                    <h6>Приём бухгалтера ТСЖ и управляющей:</h6>
                    <ul class="mb-3">
                        <li class="pl-2"><i class="lni lni-alarm-clock mr-1"></i>вторник с 16:00 до 19:00</li>
                        <li class="pl-2"><i class="lni lni-map-marker mr-1"></i>помещение диспетчерской</li>
                    </ul>
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
    img {
        width: 40%;
    }

    li {
        color: rgba(255, 255, 255, 0.8);;
    }
</style>