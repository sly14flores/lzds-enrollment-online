import { apiUrl } from '../url.js'
// import route from '../library/route'
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
    questionnaires: []
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
    questionnaires: [
        {
            id: 1,
            question: "How do you connect to the Internet at home?",
            choices: [
                {
                    id: 1,
                    name: "Wifi",
                    value: false
                },
                {
                    id: 2,
                    name: "Mobile Data",
                    value: false
                },
                {
                    id: 3,
                    name: "None",
                    value: false
                }
            ],
            type: "checkboxes",
            required: true
        },
        {
            id: 2,
            question: "What technology devices do you have access to utilize at home?",
            choices: [
                {
                    id: 1,
                    name: "Desktop",
                    value: false
                },
                {
                    id: 2,
                    name: "Smartphones",
                    value: false
                },
                {
                    id: 3,
                    name: "Tablets",
                    value: false
                }
            ],
            type: "checkboxes",
            required: true
        },
        {
            id: 3,
            question: "What platforms do you use at home that would enable you to access online or remote learning?",
            choices: [
                {
                    id: 1,
                    name: "Messenger",
                    value: false
                },
                {
                    id: 2,
                    name: "Zoom",
                    value: false
                },
                {
                    id: 3,
                    name: "Email",
                    value: false
                },
                {
                    id: 4,
                    name: "Google Classroom and Edmodo",
                    value: false
                },
                {
                    id: 5,
                    name: "None",
                    value: false
                }
            ],
            type: "checkboxes",
            required: true
        },
        {
            id: 4,
            question: "What Flexible Learning Option is convenient for you?",
            choices: [
                {
                    id: 1,
                    name: "Modules",
                    value: false
                },
                {
                    id: 2,
                    name: "Online",
                    value: false
                },
                {
                    id: 3,
                    name: "Distance Learning thru Social Media Platforms",
                    value: false
                }
            ],
            type: "checkboxes",
            required: true
        },
        {
            id: 5,
            question: "What is your average or subscribed internet speed?",
            type: "input",
            required: false
        }        
    ]
}

const loading = false

const state = () => {
    return {
        enrollment,
        loading,
    }
}

const mutations = {
    INIT(state) {
        state.enrollment = enrollment
    },    
    ENROLL(state,payload) {
        state.enrollment = payload
    },
    LOADING(state,payload) {
        state.loading = payload
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
            commit('LOADING',false)
        } catch(error) {
            commit('LOADING',false)
            const { response } = error || {}
            const { status, data } = response || null
            dispatch('ERROR',{status, data})
        }
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