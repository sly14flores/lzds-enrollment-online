import { apiUrl } from '../url.js'
import route from '../library/route'
import axios from 'axios'

/**
 * APIs
 */
 const GET_REGIONS = `${apiUrl}/address/regions`
 const getRegions = () => {
     return axios.get(GET_REGIONS)
 }

 const GET_PROVINCES = `${apiUrl}/address/provinces/:code`
 const getProvinces = ({ code }) => {
    const url =  route(GET_PROVINCES, { code })
    return axios.get(url)     
 }

 const GET_CITIES = `${apiUrl}/address/cities/:code`
 const getCities = ({ code }) => {
    const url =  route(GET_CITIES, { code })
    return axios.get(url)     
 }

 const GET_BARANGAYS = `${apiUrl}/address/barangays/:code`
 const getBarangays = ({ code }) => {
    const url =  route(GET_BARANGAYS, { code })
    return axios.get(url)     
 }

 const GET_DIALECTS = `${apiUrl}/selections/dialects`
 const getDialects = () => {
     return axios.get(GET_DIALECTS)
 }

 const GET_INDIGENOUS_GROUPS = `${apiUrl}/selections/indigenous/groups`
 const getIndigenousGroups = () => {
     return axios.get(GET_INDIGENOUS_GROUPS)
 }

 const GET_LEVELS = `${apiUrl}/selections/levels`
 const getLevels = () => {
     return axios.get(GET_LEVELS)
 }

 const GET_FEES = `${apiUrl}/selections/fees/:id`
 const getFees = ({ id }) => {
    const url =  route(GET_FEES, { id })
    return axios.get(url)     
 }

 const GET_QUESTIONNAIRES = `${apiUrl}/selections/questionnaires`
 const getQuestionnaires = () => {
     return axios.get(GET_QUESTIONNAIRES)
 }

const regions = []
const provinces = []
const cities = []
const barangays = []
const dialects = []
const indigenousGroups = []
const levels = []
const fees = []
const questionnaires = []
const down_payment = 0

const state = () => {
    return {
        regions,
        provinces,
        cities,
        barangays,
        dialects,
        indigenousGroups,
        levels,
        fees,
        questionnaires,
        down_payment
    }
}

const mutations = {
    INIT(state) {
        state.regions = regions
        state.provinces = provinces
        state.cities = cities
        state.barangays = barangays
        state.dialects = dialects
        state.indigenousGroups = indigenousGroups
        state.levels = levels
        state.fees = fees
        state.questionnaires = questionnaires
    },
    REGIONS(state, payload) {
        state.regions = payload
    },
    PROVINCES(state, payload) {
        state.provinces = payload
    },
    CITIES(state, payload) {
        state.cities = payload
    },
    BARANGAYS(state, payload) {
        state.barangays = payload
    },
    DIALECTS(state, payload) {
        state.dialects = payload
    },
    INDIGENOUS_GROUPS(state, payload) {
        state.indigenousGroups = payload
    },
    LEVELS(state, payload) {
        state.levels = payload
    },
    FEES(state, payload) {
        state.fees = payload
    },
    QUESTIONNAIRES(state, payload) {
        state.questionnaires = payload
    },
    FULL_PAYMENT(state) {
        state.fees.down_payment = state.fees.total
    },
    DOWN_PAYMENT(state) {
        state.fees.down_payment = state.down_payment
    },    
}

const actions = {
    INIT({commit}) {
        commit('INIT')
    },
    ERROR(payload) {
        const { message, status } = payload
        if (message) {
            //
        }
    },
    async REGIONS({commit, dispatch}) {
        try {
            const { data: { data } } = await getRegions()
            commit('REGIONS', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async PROVINCES({commit, dispatch}, payload) {
        const { code } = payload
        try {
            const { data: { data } } = await getProvinces({code})
            commit('PROVINCES', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async CITIES({commit, dispatch}, payload) {
        const { code } = payload
        try {
            const { data: { data } } = await getCities({code})
            commit('CITIES', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async BARANGAYS({commit, dispatch}, payload) {
        const { code } = payload
        try {
            const { data: { data } } = await getBarangays({code})
            commit('BARANGAYS', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async DIALECTS({commit, dispatch}) {
        try {
            const { data: { data } } = await getDialects()
            commit('DIALECTS', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async INDIGENOUS_GROUPS({commit, dispatch}) {
        try {
            const { data: { data } } = await getIndigenousGroups()
            commit('INDIGENOUS_GROUPS', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async LEVELS({commit, dispatch}) {
        try {
            const { data: { data } } = await getLevels()
            commit('LEVELS', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async FEES({commit, dispatch}, payload) {
        const { id } = payload
        try {
            const { data: { data } } = await getFees({id})
            commit('FEES', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async QUESTIONNAIRES({commit, dispatch}) {
        try {
            const { data: { data } } = await getQuestionnaires()
            commit('QUESTIONNAIRES', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    FULL_PAYMENT({commit}) {
        commit('FULL_PAYMENT')
    },
    DOWN_PAYMENT({commit}) {
        commit('DOWN_PAYMENT')
    }
}

const getters = {}

export default {
	namespaced: true,    
    state,
    mutations,
    actions,
    getters    
}