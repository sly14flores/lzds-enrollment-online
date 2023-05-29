import { apiUrl } from '../url.js'
import axios from 'axios'

/**
 * APIs
 */
const GET_CURRENT_SY = `${apiUrl}/school/current_sy`
const getCurrentSy = () => {
    return axios.get(GET_CURRENT_SY)
}

const studentStatus = null
const lrn = null
const student_id = null
const current_sy = null

const state = () => {
    return {
        studentStatus,
        lrn,
        student_id,
        current_sy
    }
}

const mutations = {
    ERROR(payload) {
        const { message, status } = payload
        if (message) {
            //
        }
    },
    STUDENT_STATUS(state, payload) {
        state.studentStatus = payload
    },
    LRN(state, payload) {
        state.lrn = payload
    },
    STUDENT_ID(state, payload) {
        state.student_id = payload
    },
    CURRENT_SY(state, payload) {
        state.current_sy = payload
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
    },
    async CURRENT_SY({commit, dispatch}) {
        try {
            const { data: { data } } = await getCurrentSy()
            commit('CURRENT_SY', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
}

const getters = {}

export {
    state,
    mutations,
    actions,
    getters
}
