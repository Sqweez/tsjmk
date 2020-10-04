<template>
    <div>
        <Header title="Консультант" />
        <SideMenu />
        <div class="page-content-wrapper" id="messages-container">
            <!-- Live Chat Intro-->
            <div class="live-chat-intro mb-3">
                <p class="font-weight-bold">Уборка помещений</p>
                <img src="./../assets/logow.svg" alt="">
                <!--<div class="status online">We're online</div>-->
                <!-- .status.offline We’ll be back soon // Use this code for "Offline" Status-->
            </div>

            <div class="container">
                <h6 class="text-center">Ваш номер обращения - 80. Один из операторов скоро ответит на вашу заявку, спасибо!</h6>
            </div>

            <!-- Support Wrapper-->
            <div class="support-wrapper py-3">
                <div class="container">
                    <!-- Live Chat Wrapper-->
                    <div class="live-chat-wrapper">
                        <!-- Agent Message Content-->
                        <div
                            v-for="(message, key) of messages"
                            :key="key"
                            :class="`${message.owner}-message-content`">
                            <div class="agent-thumbnail mr-2" v-if="message.owner === 'agent'"><img src="./../assets/logow.svg" alt=""></div>
                            <div :class="`${message.owner}-message-text`">
                                <p>{{ message.text }}</p><span>12:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Type Message Form-->
        <div class="type-text-form">
            <form action="#" @submit.prevent="submitForm" @keypress.enter.prevent="submitForm">
                <div class="form-group file-upload mb-0">
                    <input type="file"><span class="lni lni-cloud-upload"></span>
                </div>
                <textarea
                        aria-label="Сообщение"
                        v-model="message"
                        class="form-control"
                        name="message"
                        cols="30" rows="10"
                        placeholder="Введите свое сообщение..."></textarea>
                <button type="submit"><i class="fa fa-paper-plane-o"></i></button>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SideMenu from "../components/SideMenu";
    import Footer from "../components/Footer";
    export default {
        components: {Footer, SideMenu, Header},
        data: () => ({
            messages: [
                {
                    text: 'Привет, скоро мы ответим на ваше обращение!',
                    owner: 'agent'
                },
                {
                    text: 'Ок, жду',
                    owner: 'user'
                },
                {
                    text: 'Долго еще?',
                    owner: 'user'
                }
            ],
            message: ''
        }),
        watch: {
            messages() {
                setTimeout(() => {
                    document.documentElement.scrollTop = document.documentElement.scrollHeight;
                }, 1);
            }
        },
        methods: {
            submitForm() {
                this.messages.push({
                    text: this.message,
                    owner: 'user'
                })

                this.message = '';

                setTimeout(() => {
                    this.messages.push({
                        text: 'Вам ответит первый освободившийся оператор!',
                        owner: 'agent'
                    });
                }, 1500);
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .agent-message-content .agent-thumbnail img {
        background-color: transparent;
    }

    .agent-message-content {
        display: flex;
        align-items: center;
    }

    .type-text-form .form-control {
        width: 95%;
    }

    .agent-message-text, .user-message-text {
        line-height: normal;
    }
</style>