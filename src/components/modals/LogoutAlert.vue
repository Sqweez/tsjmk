<template>
    <div>
        <md-dialog-confirm
                :md-active="SHOW_LOGOUT_ALERT"
                md-title="Подтвердите действие!"
                md-content="Вы действительно хотите выйти из аккаунта?"
                md-confirm-text="Да"
                md-cancel-text="Отмена"
                @md-cancel="onCancel"
                @md-confirm="onConfirm"/>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data: () => ({}),
        methods: {
            onCancel() {
                this.$emit('cancel');
            },
            onConfirm() {
                this.$emit('confirm');
            }
        },
        computed: {
            SHOW_LOGOUT_ALERT() {
                return this.$store.getters.SHOW_LOGOUT_ALERT;
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
            theme: dark // This can be dark or light
    ));

    @import "~vue-material/dist/theme/all";
</style>