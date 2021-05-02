import { apiUrl } from '../url.js'
import route from '../library/route'
import axios from 'axios'
import Swal from 'sweetalert2'

/**
 * APIs
 */
// Enroll Student
const ENROLL_STUDENT = `${apiUrl}/enroll/student/online`
const enrollStudent = (payload) => {
    return axios.post(ENROLL_STUDENT, payload)
}

const PAYMENT_INFO = `${apiUrl}/payment/info/:uuid`
const studentPayment = (payload) => {
    const { uuid } = payload
    const url =  route(PAYMENT_INFO, { uuid })
    return axios.get(url)
}

const enrollment = {
    id: 0,
    lrn: null,
    student_id: null,
    email_address: null,
    grade: null,
    student_status: null,
    payment_mode: null,
    payment_method: null,
    down_payment: null,
    esc_voucher_grantee: null,
    discount_amount: 0,
    discount_percentage: 0,
    total_amount_to_pay: 0,
    // questionnaires: [],
    // enrollment_uiid: null,
}

const testEnrollment = {
    lrn:"101070110017",
    student_id: 870,
    email_address: "1.a@yahoo.com",
    grade: 12,
    student_status: "Regular",
    payment_mode: "monthly",
    payment_method: "cash",
    down_payment: 10000,
    esc_voucher_grantee: null,
    discount_amount: 0,
    discount_percentage: 0,    
    total_amount_to_pay: 0,
    // questionnaires: [
    //     {
    //         id: 1,
    //         question: "How do you connect to the Internet at home?",
    //         choices: [
    //             {
    //                 id: 1,
    //                 name: "Wifi",
    //                 value: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Mobile Data",
    //                 value: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "None",
    //                 value: false
    //             }
    //         ],
    //         type: "checkboxes",
    //         required: true
    //     },
    //     {
    //         id: 2,
    //         question: "What technology devices do you have access to utilize at home?",
    //         choices: [
    //             {
    //                 id: 1,
    //                 name: "Desktop",
    //                 value: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Smartphones",
    //                 value: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Tablets",
    //                 value: false
    //             }
    //         ],
    //         type: "checkboxes",
    //         required: true
    //     },
    //     {
    //         id: 3,
    //         question: "What platforms do you use at home that would enable you to access online or remote learning?",
    //         choices: [
    //             {
    //                 id: 1,
    //                 name: "Messenger",
    //                 value: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Zoom",
    //                 value: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Email",
    //                 value: false
    //             },
    //             {
    //                 id: 4,
    //                 name: "Google Classroom and Edmodo",
    //                 value: false
    //             },
    //             {
    //                 id: 5,
    //                 name: "None",
    //                 value: false
    //             }
    //         ],
    //         type: "checkboxes",
    //         required: true
    //     },
    //     {
    //         id: 4,
    //         question: "What Flexible Learning Option is convenient for you?",
    //         choices: [
    //             {
    //                 id: 1,
    //                 name: "Modules",
    //                 value: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Online",
    //                 value: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Distance Learning thru Social Media Platforms",
    //                 value: false
    //             }
    //         ],
    //         type: "checkboxes",
    //         required: true
    //     },
    //     {
    //         id: 5,
    //         question: "What is your average or subscribed internet speed?",
    //         type: "input",
    //         required: false
    //     }        
    // ],
    // enrollment_uiid: null,
}

const payment = {}

const loading = false
const enrollment_uiid = null

const state = () => {
    return {
        enrollment,
        loading,
        payment,
        enrollment_uiid,
    }
}

const mutations = {
    INIT(state) {
        state.enrollment = enrollment
        state.payment = payment
        state.loading = loading        
        state.enrollment_uiid = enrollment_uiid
    },
    ENROLL(state,payload) {
        state.enrollment = payload
    },
    LOADING(state,payload) {
        state.loading = payload
    },
    UUID(state,payload) {
        state.enrollment_uiid = payload
    },
    RESET_UUID(state) {
        state.enrollment_uiid = null
    },
    PAYMENT_INFO(state,payload) {
        state.payment = payload
    }
}

const actions = {
    INIT({commit}) {
        commit('INIT')
    },
    ERROR({commit},payload) {
        const { status, data } = payload
        const { message } = data
        const icon = (status==406)?'info':'error'
        const html = (status==406)?
                    `<div style="padding-left: 35px; margin-top: -35px; color:#afdbbf">${message}</div>`:
                    `<div style="padding-left: 35px; margin-top: -35px; color:#d10926">${message}</div>`
        const background = (status==406)?'#078a3b':'#e8c2cf'

        if (message) {
            Swal.fire({
                html: html,
                icon: icon,
                toast: 'true',
                // position: 'top-right',
                position: 'top',
                showConfirmButton: false,
                showCancelButton: false,
                background: background,
                padding: '1.5rem',
                timer: 2000,
            }) 
        }
    },    
    async ENROLL({commit, dispatch}, payload) {
        commit('LOADING',true)
        try {
            const { data } = await enrollStudent(payload)
            const { data: { enrollment_uiid } } = data
            commit('UUID',enrollment_uiid)
            commit('LOADING',false)
            Swal.fire({
                // text: 'Record found',
                html: '<div style="padding-left: 35px; margin-top: -35px; color:#afdbbf">Your enrollment has been submitted.</div>',                    
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
            commit('LOADING',false)
            const { response } = error || {}
            const { status, data } = response || null
            dispatch('ERROR',{status, data})
        }
    },
    async PAYMENT_INFO({commit},payload) {
        const { uuid } = payload
        try {
            const { data } = await studentPayment({ uuid })
            commit('PAYMENT_INFO',data)
        } catch(error) {
            const { response } = error || {}
            const { status, data } = response || null
        }
    },    
    RESET_UUID({commit}) {
        commit('RESET_UUID')
    }
}

const getters = {}

const enrollmentsStore = {
	namespaced: true,    
    state,
    mutations,
    actions,
    getters
}

export { testEnrollment, enrollmentsStore }