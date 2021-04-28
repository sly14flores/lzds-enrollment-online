import { apiUrl } from '../url.js'
// import route from '../library/route'
import axios from 'axios'

/**
 * APIs
 */
// New Profile
const NEW_PROFILE = `${apiUrl}/profile/student/online`
const newProfile = (payload) => {
    return axios.post(NEW_PROFILE, payload)
}

// Query By LRN/Birthdate
const QUERY_STUDENT = `${apiUrl}/query/student/online`
const queryStudent = (payload) => {
    return axios.post(QUERY_STUDENT, payload)
}

const student = {
    id: 0,
    lrn: null,
    lastname: null,
    firstname: null,
    middlename: null,
    ext_name: null,
    date_of_birth: null,
    gender: null,
    house_no: null,
    barangay: null,
    city: null,
    province: null,
    region: "01",
    zip_code: null,
    contact_no: null,
    student_status: null,
    email_address: null,
    indigenous: null, // Name of indenous group
    mother_tongue: null,
    relationship: null,
    gp_firstname: null,
    gp_middlename: null,
    gp_lastname: null,
    gp_contact_no: null,    
}

const testStudent = {
    lrn:"123412341234",
    lastname: "Flores",
    firstname: "Sly",
    middlename: "Bulilan",
    ext_name: "",
    date_of_birth: "1982-11-14",
    gender: "Male",
    house_no: "1",
    barangay: "013301001",
    city: "013301",
    province: "0133",
    region: "01",
    zip_code: "2504",
    contact_no: "09179245040",
    student_status: "Transferee",
    email_address: "sly@gmail.com",
    indigenous: "Yes",
    mother_tongue: "Ilocano",
    relationship: "Father",
    gp_firstname: "Audie",
    gp_middlename: "Guray",
    gp_lastname: "Flores",
    gp_contact_no: "1234",
}

const state = () => {
    return {
        student,
        testStudent
    }
}

const mutations = {
    INIT(state) {
        state.student = student
    },    
    STUDENT(state,payload) {
        state.student = payload
    }
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
    async STUDENT({commit, dispatch}, payload) {
        try {
            const { data } = await newProfile(payload)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async QUERY_STUDENT({commit, dispatch}, payload) {
        try {
            const { data } = await queryStudent(payload)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    }    
}

const getters = {}

const studentsStore = {
	namespaced: true,    
    state,
    mutations,
    actions,
    getters    
}

export { testStudent, studentsStore }