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
    esc_voucher_grantee: null,
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
    indigent: false,
    updated_dt: null,
}

const testStudent = {
    id: 1143,
    lrn:"123412341234",
    esc_voucher_grantee: false,
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
        state.student = {...student}
    },    
    STUDENT(state,payload) {
        state.student = {...payload}
        // state.student.id = payload.id
        // state.student.lrn = payload.lrn
        // state.student.lastname = payload.lastname
        // state.student.firstname = payload.firstname
        // state.student.middlename = payload.middlename
        // state.student.ext_name = payload.ext_name
        // state.student.date_of_birth = payload.date_of_birth
        // state.student.gender = payload.gender
        // // state.student.home_address = payload.home_address
        // state.student.contact_no = payload.contact_no
        // state.student.student_status = payload.student_status
        // state.student.email_address = payload.email_address
        // state.student.indigenous = payload.indigenous
        // state.student.mother_tongue = payload.mother_tongue
        // state.student.house_no = payload.house_no
        // state.student.zip_code = payload.zip_code
        // state.student.relationship = payload.relationship
        // state.student.gp_firstname = payload.gp_firstname
        // state.student.gp_middlename = payload.gp_middlename
        // state.student.gp_lastname = payload.gp_lastname
        // state.student.gp_contact_no = payload.gp_contact_no   
        // state.student.updated_dt = payload.updated_dt
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
            const { data: { data } } = await newProfile(payload)
            commit('STUDENT', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async QUERY_STUDENT({commit, dispatch}, payload) {
        try {
            const { data: { data } } = await queryStudent(payload)
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