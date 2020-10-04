export default {
    state: {
        counters: [],
        counter_types: [
            {
                id: 1,
                name: 'Горячая вода'
            },
            {
                id: 2,
                name: 'Холодная вода'
            }
        ]
    },
    getters: {
        COUNTERS: state => state.counters,
        COUNTER_TYPES: state => state.counter_types,
    },
    mutations: {
        addCounter(state, payload) {
            state.counters.push(payload)
        },
    },
    actions: {
        async addCounter({commit}, payload) {
            commit('addCounter', payload);
        }
    }
}