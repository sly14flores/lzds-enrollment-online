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
        path: "/profile/new",
        name: "ProfileNew",
        component: Profile,
    },
    {
        path: "/enroll",
        name: "Enroll",
        component: Enroll,
    },         
]