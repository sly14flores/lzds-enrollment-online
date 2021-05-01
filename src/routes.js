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
        path: "/payment/cash",
        name: "PaymentCash",
        component: PaymentCash,        
    },
    {
        path: "/payment/bank",
        name: "PaymentBank",
        component: PaymentBank,        
    },
    {
        path: "/payment/gcash",
        name: "PaymentGcash",
        component: PaymentGcash,        
    },
    {
        path: "/payment/paypal",
        name: "PaymentPaypal",
        component: PaymentPaypal,        
    }   
]