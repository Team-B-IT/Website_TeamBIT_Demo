import About from './pages/About'
import Home from './pages/Home'
import Member from './pages/Member'
import Visit from './pages/Visit_Us'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Achiment from './pages/Achiments'
import NF from './pages/404'
export const routes =  [
  { path: '/about', name: 'aboutpage', component: About },
  { path: '/', name: 'homepage', component: Home },
  { path: '/member', name: 'memberpage', component: Member },
  { path: '/visit', name: 'visitpage', component: Visit },
  { path: '/blog', name: 'blogpage', component: Blog },
  { path: '/services', name: 'servicespage', component: Services },
  { path: '/achiment', name: 'achimentpage', component: Achiment },
  { path: '*', name: 'not found', component: NF}
]
  