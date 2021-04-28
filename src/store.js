import { createStore } from 'vuex'
import { state, mutations, actions, getters } from './stores/root'
import selections from './stores/selections'
import { studentsStore } from './stores/students'
import { enrollmentsStore } from './stores/enrollments'

export default createStore({
    modules: {
        selections,
        students: studentsStore,
        enrollments: enrollmentsStore,
    },
    state,
    mutations,
    actions,
    getters,    
})