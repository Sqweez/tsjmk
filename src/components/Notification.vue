<template>
    <div>
        <div
            :class="{'d-none': !this.SHOW_NOTIFICATION}"
            class="add2cart-notification animated fadeIn">
            {{ NOTIFICATION_TEXT || 'Пустое уведомление' }}
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods: {},
        computed: {
            SHOW_NOTIFICATION() {
                return this.$store.getters.SHOW_NOTIFICATION;
            },
            NOTIFICATION_TEXT() {
                return this.$store.getters.NOTIFICATION_TEXT;
            }
        },
        watch: {
            SHOW_NOTIFICATION() {
                if (this.SHOW_NOTIFICATION) {
                    setTimeout(() => {
                        this.$store.dispatch('hideNotification');
                    }, 2000);
                }
            }
        }
    }
</script>

<style scoped>

</style>