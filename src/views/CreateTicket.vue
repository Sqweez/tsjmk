<template>
    <div>
        <Header
            title="Создание обращения"
        />
        <SideMenu />

        <div class="page-content-wrapper py-3">
            <div class="container">
                <p class="text-center font-weight-bold text-white mb-4">
                    Выберите вашу тему обращения, загрузите фотографию и отправьте сообщение.
                </p>
                <p class="text-center font-weight-bold text-white mb-2">
                    Выбирите тип обращения:
                </p>

                <div class="form-group mb-3">
                    <select
                            placeholder="Тип обращения"
                            aria-label="Тип обращения"
                            class="form-control custom-select"
                            id="ticket_type"
                            name="ticket_type"
                            v-model="ticket.type">
                        <option
                            v-for="(type, idx) of types"
                            :key="idx"
                            :value="type">
                            {{ type }}
                        </option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <textarea
                            aria-label="Обращение"
                            class="form-control"
                            id="message"
                            name="message" cols="30" rows="10" placeholder="Ваше обращение"
                            v-model="ticket.text">
                    </textarea>
                </div>
                <div class="form-group mb-3">
                    <button class="btn btn-warning btn-lg w-100" @click="$refs.imageInput.click()">Добавить изображение</button>
                    <input type="file" class="d-none" aria-label="Изображение" ref="imageInput">
                </div>
                <div class="form-group mb-3">
                    <button class="btn btn-success btn-lg w-100" @click="addTicket">Добавить обращение</button>
                </div>
            </div>
        </div>
        <Notification
            text="Обращение успешно создано!"
        />
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SideMenu from "../components/SideMenu";
    import Footer from "../components/Footer";
    import Notification from "../components/Notification";
    export default {
        components: {Notification, Footer, SideMenu, Header},
        data: () => ({
            types: [
                'Уборка помещений',
                'Уборка двора',
                'Водоснабжение и канализация',
                'Отопление',
                'Электричество',
                'Слаботочные системы',
                'Паркинг',
                'Охрана',
                'Бухгалтерия',
                'Лифт',
                'ПК-помощь',
                'Другое'
            ],
            ticket: {
                type: null,
                text: '',
                photo: null,
            }
        }),
        methods: {
            addTicket() {
                this.$notification('Обращение успешно создано!')
                this.$router.push('/home');
            }
        },
        computed: {},
        watch: {
            ticket: {
                handler() {
                    this.types = this.types.sort(a => {
                        if (a === this.ticket.type) {
                            return -1;
                        } else {
                            return 1;
                        }
                    })
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>