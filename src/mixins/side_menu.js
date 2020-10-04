import $ from "jquery";

export default {
    computed: {
        SHOW_SIDE_MENU() {
            return this.$store.getters.SHOW_SIDE_MENU;
        }
    },
    watch: {
        SHOW_SIDE_MENU() {
            const sideNavWrapper = $("#sidenavWrapper");
            const headerArea = $("#headerArea");
            const footerNav = $("#footerNav");
            const blackOverlay = $('#sidenav-black-overlay');

            if (this.SHOW_SIDE_MENU) {
                sideNavWrapper.addClass("nav-active");
                headerArea.addClass("header-out");
                footerNav.addClass("footer-out");
                blackOverlay.addClass("active");
            } else {
                blackOverlay.removeClass("active");
                sideNavWrapper.removeClass("nav-active");
                headerArea.removeClass("header-out");
                footerNav.removeClass("footer-out");
            }
        }
    },
}