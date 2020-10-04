<template>
    <div>
        <div class="login-wrapper d-flex align-items-center justify-content-center text-center">
            <!-- Background Shape-->
            <div class="background-shape"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><img class="big-logo" src="./../assets/logow.svg" alt="">
                        <!-- Register Form-->
                        <div class="register-form mt-5 px-4">
                            <form action="#" method="">
                                <div class="form-group text-left mb-4"><span>Имя</span>
                                    <input class="form-control" id="name" type="text" placeholder="Ваше имя">
                                </div>
                                <div class="form-group text-left mb-4"><span>Фамилия</span>
                                    <input class="form-control" id="surname" type="text" placeholder="Ваша фамилия">
                                </div>
                                <div class="form-group text-left mb-4"><span>Телефон</span>
                                    <div class="d-flex position-relative">
                                        <span class="phone-prefix">+7</span>
                                        <input class="form-control"
                                               id="username"
                                               type="number"
                                               :maxlength="10"
                                               placeholder="(***) *** ** **"
                                               v-model="user.phone"
                                               aria-label="телефон">
                                    </div>
                                </div>
                                <div class="form-group text-left mb-4"><span>Email</span>
                                    <input class="form-control" id="email" type="text" placeholder="example@email.com">
                                </div>
                                <div class="form-group text-left mb-4"><span>Номер квартиры</span>
                                    <input class="form-control" id="apartment" type="number" placeholder="***">
                                </div>
                                <div class="form-group text-left mb-4"><span>Пароль</span>
                                    <input class="input-psswd form-control" id="registerPassword" type="password" placeholder="********************">
                                </div>
                                <div class="login-meta-data">
                                    <p class="mt-3 mb-0" style="overflow-wrap: break-word;">
                                        Для продолжения необходимо ознакомиться с
                                        <a style="font-size: 14px;" @click="showUserAgreementModal">правилами</a>
                                    </p>
                                </div>
                                <md-checkbox v-model="rulesAgree" class="md-primary" style="color: #fff;">
                                    С правилами ознакомлен и согласен
                                </md-checkbox>
                                <button class="btn btn-success btn-lg w-100" type="submit" @click.prevent="$router.push('/home')">Зарегистрироваться</button>
                            </form>
                        </div>
                        <!-- Login Meta-->
                        <div class="login-meta-data">
                            <p class="mt-3 mb-0">Уже есть аккаунт?<router-link class="ml-1" to="/login">Войдите в приложение</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <UserAgreement
                @close="userAgreementModal = false"
                :show-dialog="userAgreementModal" />
    </div>
</template>

<script>
    import UserAgreement from "../components/modals/UserAgreement";
    export default {
        components: {UserAgreement},
        data: () => ({
            user: {
                phone: '',
                name: '',
                surname: '',
            },
            rulesAgree: false,
            userAgreementModal: false
        }),
        methods: {
            showUserAgreementModal() {
                this.userAgreementModal = true;
            }
        },
        computed: {},
        watch: {
            user: {
                handler() {
                    if (this.user.phone.length > 10) {
                        this.user.phone.slice(0, 10);
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .phone-prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1%;
    }
    .big-logo {
        max-width: 10em;
    }
    
    .md-checkbox > .md-checkbox-label {
        color: #fff!important;
    }
</style>