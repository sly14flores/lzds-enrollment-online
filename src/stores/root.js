const studentStatus = null

const state = () => {
    return {
        studentStatus,
    }
}

const mutations = {
    STUDENT_STATUS(state, payload) {
        state.studentStatus = payload
    }
}

const actions = {
    STUDENT_STATUS({commit}, payload) {
        commit('STUDENT_STATUS',payload)
    }
}

const getters = {}

export {
    state,
    mutations,
    actions,
    getters
}
