import store from './../store/index';

export default {
    install(Vue, options) {
        Vue.prototype.$notification = async function (message) {
            await store.dispatch('showNotification', message);
        }
    }
}