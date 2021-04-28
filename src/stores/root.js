const studentStatus = null
const lrn = null
const student_id = null

const state = () => {
    return {
        studentStatus,
        lrn,
        student_id
    }
}

const mutations = {
    STUDENT_STATUS(state, payload) {
        state.studentStatus = payload
    },
    LRN(state, payload) {
        state.lrn = payload
    },
    STUDENT_ID(state, payload) {
        state.student_id = payload
    }
}

const actions = {
    STUDENT_STATUS({commit}, payload) {
        commit('STUDENT_STATUS',payload)
    },
    LRN({commit}, payload) {
        commit('LRN',payload)
    },
    STUDENT_ID({commit}, payload) {
        commit('STUDENT_ID',payload)
    }        
}

const getters = {}

export {
    state,
    mutations,
    actions,
    getters
}
