import Home from './pages/Home'
import Profile from './pages/Profile'
import Enroll from './pages/Enrollment'
import QueryStudent from './pages/Query'
import StudentInfo from './pages/StudentInfo'

/**
 * Payment methods
 */
import PaymentCash from './pages/PaymentCash'
import PaymentBank from './pages/PaymentBank'
import PaymentGcash from './pages/PaymentGcash'
import PaymentPaypal from './pages/PaymentPaypal'
import ThankYou from './pages/ThankYou'

import Notice from './pages/Notice'

export default [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/profile/:student_status",
        name: "ProfileNew",
        component: Profile,
    },
    {
        path: "/query/student",
        name: "QueryStudent",
        component: QueryStudent,
    },
    {
        path: "/enrollment",
        name: "Enroll",
        component: Enroll,
    },
    {
        path: "/student/info",
        name: "StudentInfo",
        component: StudentInfo,
    },
    {
        path: "/payment/cash/:uiid",
        name: "PaymentCash",
        component: PaymentCash,        
    },
    {
        path: "/payment/bank/:uiid",
        name: "PaymentBank",
        component: PaymentBank,        
    },
    {
        path: "/payment/gcash/:uiid",
        name: "PaymentGcash",
        component: PaymentGcash,        
    },
    {
        path: "/payment/paypal/:uiid",
        name: "PaymentPaypal",
        component: PaymentPaypal,   
    },
    {
        path: "/refno/success",
        name: "ThankYou",
        component: ThankYou,   
    },
    {
        path: "/notice",
        name: "Notice",
        component: Notice,   
    },            
]