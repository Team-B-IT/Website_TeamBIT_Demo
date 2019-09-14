import About from './pages/About'
import Home from './pages/Home'
import Member from './pages/Member'
import Visit from './pages/Visit_Us'
import Blog from './pages/Blog'
import Products from './pages/Products'
import Achiment from './pages/Achiments'
import NF from './pages/404'
import VuongProfile from './pages/Profile/vuong_profile'
import HieuProfile from './pages/Profile/hieu_profile'

export const routes =  [
  { path: '/about', name: 'aboutpage', component: About },
  { path: '/', name: 'homepage', component: Home },
  { path: '/member', name: 'memberpage', component: Member },
  { path: '/visit', name: 'visitpage', component: Visit },
  { path: '/blog', name: 'blogpage', component: Blog },
  { path: '/products', name: 'productspage', component: Products },
  { path: '/achievements', name: 'achimentspage', component: Achiment },
  { path: '/vuongProfile', name: 'profile1epage', component: VuongProfile },
  { path: '/hieuProfile', name: 'profile2page', component: HieuProfile },
  { path: '*', name: 'not found', component: NF}
]
  