<template>
    <div>
        <Header title="Новый счетчик"/>
        <SideMenu/>
        <div class="page-content-wrapper py-3">
            <div class="container">
                <p class="text-center font-weight-bold text-white mb-2">
                    Выбирите тип счетчика: </p>
                <div class="form-group mb-3">
                    <select
                            aria-label="Тип счетчика"
                            class="form-control custom-select"
                            id="ticket_type"
                            name="ticket_type"
                            v-model="counter.type">
                        <option
                                v-for="(type, idx) of COUNTER_TYPES"
                                :key="idx"
                                :value="type.id">
                            {{ type.name }}
                        </option>
                    </select>
                </div>
                <p class="text-center font-weight-bold text-white mb-2">
                    Введите номер счетчика: </p>
                <div class="form-group mb-3">
                    <input
                            type="number"
                            aria-label="Номер счетчика"
                            class="form-control"
                            id="message"
                            name="message"
                            placeholder="000000000"
                            v-model.number="counter.number" />
                </div>

                <div class="form-group mb-3">
                    <button class="btn btn-success btn-lg w-100" @click="addCounter">Добавить счетчик</button>
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
    import {mapGetters} from 'vuex';
    export default {
        components: {Footer, SideMenu, Header},
        data: () => ({
            counter: {
                type: 1,
                number: '',
            }
        }),
        methods: {
            addCounter() {
                this.$store.dispatch('addCounter', this.counter);
                this.$notification('Счетчик успешно добавлен!');
                this.$router.back();
            }
        },
        mounted() {
            this.counter = {
                type: 1,
                number: ''
            }
        },
        computed: {
            ...mapGetters(['COUNTER_TYPES']),
        }
    }
</script>

<style scoped>

</style>