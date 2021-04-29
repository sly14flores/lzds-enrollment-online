import Home from './pages/Home'
import Profile from './pages/Profile'
import Enroll from './pages/Enrollment'
import QueryStudent from './pages/Query'
import StudentInfo from './pages/StudentInfo'

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
]