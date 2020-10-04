<template>
    <div>
        <md-dialog-confirm
                :md-active="SHOW_CALL_ALERT"
                md-title="Подтвердите действие!"
                md-content="Вы действительно хотите позвонить по экстренному номеру?"
                md-confirm-text="Да"
                md-cancel-text="Отмена"
                @md-cancel="onCancel"
                @md-confirm="onConfirm"/>

    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {
            onCancel() {
                this.$store.dispatch('toggleCallAlert');
            },
            onConfirm() {
                this.$store.dispatch('toggleCallAlert');
                const cta = document.createElement('a');
                cta.href = 'tel:+78126128946';
                cta.click();
            }
        },
        computed: {
            SHOW_CALL_ALERT() {
                return this.$store.getters.SHOW_CALL_ALERT;
            }
        }
    }
</script>

<style scoped>

</style>