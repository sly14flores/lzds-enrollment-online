import { apiUrl } from '../url.js'
// import route from '../library/route'
import axios from 'axios'
import Swal from 'sweetalert2'

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
    // esc_voucher_grantee: null,
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
    previous_level: null,
    next_level: null,
    previous_level_id: null,
    next_level_id: null,
    discounts: [],
    total_discounts_percentage: 0,    
    updated_dt: null,
}

const testStudent = {
    id: 1143,
    lrn:"123412341234",
    // esc_voucher_grantee: false,
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
    indigent: false,
    previous_level: null,
    next_level: null,
    previous_level_id: null,
    next_level_id: null,
    discounts: ['w/Honors (10%)','w/High Honors (20%)'],
    total_discounts_percentage: 0,    
    updated_dt: null,    
}

const loading = false

const state = () => {
    return {
        student,
        testStudent,
        loading,
    }
}

const mutations = {
    INIT(state) {
        state.student = {...student}
        state.loading = false
    },
    LOADING(state,payload) {
        state.loading = payload
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
    },
    PRIVACY(){
        Swal.fire({
            icon: 'info',
            input: 'checkbox',
            inputValue: 0,
            inputPlaceholder: 'I have read and agree to this Data Privacy Consent',
            title: 'DATA PRIVACY CONSENT',
            html:   '<p class="p-text-left">By proceeding to filling up the succeeding forms, you agree and consent as follows:</p>' +
                    '<p class="p-text-left">1. That you are fully aware that Lord of Zion Divine School (herein referred to as the “School”) or its designated representative is duty bound and obligated under the Data Privacy Act of 2012 to protect all of your personal and sensitive information that it collects, processes, and retains upon your enrollment and during your stay in the School.</p>' +
                    '<p class="p-text-left">2. That the School has utilized VSmart Enroll (herein referred to as the “Website”), which is owned, managed, and operated by Vibal Group, Inc. (herein referred to as “VGI”) as its enrollment management system. Both the Website and VGI are also duty bound and obligated under the Data Privacy Act of 2012 to protect all of your personal and sensitive information that it connects, processes, and retains upon your enrollment and during your stay in the School.</p>' +
                    '<p class="p-text-left">3. That Student personal information includes any information about your identity, academics, medical conditions, or any documents containing your identity. This includes but is not limited to your name, address, names of your parents or guardians, date of birth, grades, attendance, disciplinary records, and other information necessary for basic administration and instruction.</p>' +
                    '<p class="p-text-left">4. That you understand that your personal information cannot be disclosed without your consent. You understand that the information that was collected and processed relates to your enrollment and may be used by the School or VGI to pursue their individual legitimate business interests. Likewise, you are fully aware that the School or VGI may share such information to its officers, or affiliated or partner organizations as part of its contractual obligations, or with government agencies pursuant to law or legal process. In this regard, you allow both the School and VGI to collect, process, use, and share your personal data in the pursuit of their individual interests as educational institutions.</p>',
            width: 1300,
            confirmButtonText: 'Proceed&nbsp;<i class="fa fa-arrow-right"></i>',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            inputValidator: (result) => {
                return !result && 'You need to agree with Data Privacy Consent'
            }
            
        })
    },
    QUERY_STUDENT(state,payload) {
        state.student = {
            ...payload,
            student_status: 'Regular',
        }
    }    
}

const actions = {
    INIT({commit}) {
        commit('INIT')
    },
    ERROR({commit},payload) {
        const { message, status } = payload
        if (message) {
            //
        }
        commit('LOADING',false)
    },
    async PRIVACY({commit}) {
        commit('PRIVACY')
    },
    async STUDENT({commit, dispatch}, payload) {
        commit('LOADING',true)
        try {
            const { data: { data } } = await newProfile(payload)
            commit('LOADING',false)
            commit('STUDENT', data)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
        }
    },
    async QUERY_STUDENT({commit, dispatch}, payload) {
        commit('LOADING',true)
        try {
            const { data: { data } } = await queryStudent(payload)
            commit('QUERY_STUDENT',data)
            // commit('LOADING',false)
            Swal.fire({
                // text: 'Record found',
                html: '<div style="padding-left: 35px; margin-top: -35px; color:#afdbbf">Record found</div>',                    
                icon: 'success',
                toast: 'true',
                // position: 'top-right',
                position: 'top',
                showConfirmButton: false,
                showCancelButton: false,
                background: '#078a3b',
                padding: '1.5rem',
                timer: 2000,
            })            
        } catch(error) {
            const { response } = error || {}
            const { status, data } = response || {}
            const { message } = data || {}
            Swal.fire({
                // text: 'No record found in our database',
                html: `<div style="padding-left: 35px; margin-top: -35px; color:#d10926">No record found in our database</div>`,                    
                icon: 'error',
                toast: 'true',
                // position: 'top-right',
                position: 'top',
                showConfirmButton: false,
                showCancelButton: false,
                background: '#e8c2cf',
                padding: '1.5rem',
                timer: 3000,
            })            
            dispatch('ERROR',response)
        }
    },
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