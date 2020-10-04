export default {
    state: {
        sideMenu: false,
        logoutAlert: false,
        notification: false,
        notificationText: '',
        callAlert: false,
    },
    getters: {
        SHOW_SIDE_MENU: state => state.sideMenu,
        SHOW_LOGOUT_ALERT: state => state.logoutAlert,
        SHOW_NOTIFICATION: state => state.notification,
        NOTIFICATION_TEXT: state => state.notificationText,
        SHOW_CALL_ALERT: state => state.callAlert,
    },
    mutations: {
        toggleSideMenu(state) {
            state.sideMenu = !state.sideMenu;
        },
        showNotification(state, payload) {
            state.notification = true;
            state.notificationText = payload;
        },
        hideNotification(state) {
            state.notification = false;
            state.notificationText = '';
        },
        toggleNotification(state) {
            if (state.notification) {
                state.notificationText = '';
            }
            state.notification = !state.notification;
        },
        disableMenu(state) {
            state.sideMenu = false;
        },
        toggleLogoutAlert(state) {
            state.logoutAlert = !state.logoutAlert;
        },
        toggleCallAlert(state) {
            state.callAlert = !state.callAlert;
        }
    },
    actions: {
        toggleSideMenu({commit}) {
            commit('toggleSideMenu')
        },
        disableMenu({commit}) {
            commit('disableMenu');
        },
        toggleLogoutAlert({commit}) {
            commit('toggleLogoutAlert')
        },
        toggleNotification({commit}) {
            commit('toggleNotification')
        },
        showNotification({commit}, payload) {
            commit('showNotification', payload);
        },
        hideNotification({commit}) {
            commit('hideNotification');
        },
        toggleCallAlert({commit}) {
            commit('toggleCallAlert');
        }

    }
}