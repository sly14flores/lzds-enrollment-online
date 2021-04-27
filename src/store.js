import { createStore } from 'vuex'
import { state, mutations, actions, getters } from './stores/root'
import selections from './stores/selections'

export default createStore({
    modules: {
        selections
    },
    state,
    mutations,
    actions,
    getters,    
})