import About from './pages/About'
import Home from './pages/Home'
import Member from './pages/Member'
import NF from './pages/404'
export const routes =  [
  { path: '/about', name: 'aboutpage', component: About },
  { path: '/', name: 'homepage', component: Home },
  { path: '/member', name: 'memberpage', component: Member },
  { path: '*', name: 'not found', component: NF}
]
  