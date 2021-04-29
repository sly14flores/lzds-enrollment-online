import { apiUrl } from '../url.js'
// import route from '../library/route'
import axios from 'axios'

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

const state = () => {
    return {
        enrollment,
    }
}

const mutations = {
    INIT(state) {
        state.enrollment = enrollment
    },    
    ENROLL(state,payload) {
        state.enrollment = payload
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
    async ENROLL({commit, dispatch}, payload) {
        try {
            const { data } = await enrollStudent(payload)
        } catch(error) {
            const { response } = error || {}
            dispatch('ERROR',response)
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