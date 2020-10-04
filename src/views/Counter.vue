<template>
    <div>
        <Header
                title="Счетчики"
        />
        <SideMenu/>
        <div class="page-content-wrapper py-3">
            <div class="container">
                <router-link to="/new-counter" class="btn btn-success btn-sm add-counter" href="#"><i class="lni lni-plus"></i></router-link>
                <div class="d-flex justify-content-center">
                    <h5 class="text-center">Водоснабжение</h5>
                </div>
                <p class="text-center text-white">Сентябрь, 2020</p>
                <h6 class="text-center mt-3" v-if="!COUNTERS.length">Добавьте счетчики, чтобы продолжить!</h6>
                <div class="card coupon-card mb-3" v-for="(counter, key) of COUNTERS" :key="key">
                    <div class="card-body">
                        <div class="counter-heading">
                            <i class="lni lni-drop mr-1 text-primary"
                               :class="{
                                'text-primary': counter.type === 2,
                                'text-danger': counter.type === 1
                                }"></i><h6 class="text-white">129378</h6>
                        </div>
                        <p class="text-white-50">Номер счетчика: {{ counter.number }}</p>
                        <input type="text" aria-label="показания счетчика" class="form-control" placeholder="0000000">
                        <p class="text-sm-left mt-2 previous-value text-white-50 mb-0">Предыдущее значение: 268.00</p>
                    </div>
                </div>
            </div>
            <div class="form-group mb-3 container" v-if="COUNTERS.length">
                <button class="btn btn-success btn-lg w-100" @click="onSubmit">Отправить показания</button>
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
        methods: {
            onSubmit() {
                this.$notification('Показания счетчиков успешно переданы!')
                this.$router.push('/home');
            }
        },
        computed: {
            COUNTERS() {
                return this.$store.getters.COUNTERS;
            }
        }
    }
</script>

<style scoped>
    .counter-heading {
        display: flex;
        font-size: 20px;
    }

    .previous-value {
        font-size: 12px;
    }

    .add-counter {
        position: absolute;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        right: 4%;
        top: 5%;
    }
    
    .add-counter:active {
        color: rgba(255, 255, 255, 0.5);
    }
</style>