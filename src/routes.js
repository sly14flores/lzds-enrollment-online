import Home from './pages/Home'
import Profile from './pages/Profile'
import Enroll from './pages/Enrollment'

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
        path: "/profile/:student_status",
        name: "ProfileNew",
        component: Profile,
    },    
    {
        path: "/enrollment",
        name: "Enroll",
        component: Enroll,
    },         
]