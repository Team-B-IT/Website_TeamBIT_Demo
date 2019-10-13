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
import AnProfile from './pages/Profile/annc_profile'
import CuongNMProfile from './pages/Profile/cuongnm_profile'
import CuongBPTProfile from './pages/Profile/cuongbpt_profile'
import DuyProfile from './pages/Profile/duync_profile'
import HoangProfile from './pages/Profile/hoang_profile'
import KienProfile from './pages/Profile/kien_profile'
import LienProfile from './pages/Profile/lien_profile'
import VuProfile from './pages/Profile/vudt_profile.vue'
import VinhProfile from './pages/Profile/vinh_profile'


export const routes =  [
  { path: '/about', name: 'aboutpage', component: About },
  { path: '/', name: 'homepage', component: Home },
  { path: '/member', name: 'memberpage', component: Member },
  { path: '/visit', name: 'visitpage', component: Visit },
  { path: '/blog', name: 'blogpage', component: Blog },
  { path: '/products', name: 'productspage', component: Products },
  { path: '/achievements', name: 'achimentspage', component: Achiment },
  { path: '/vuongProfile', name: 'profile1page', component: VuongProfile },
  { path: '/hieuProfile', name: 'profile2page', component: HieuProfile },
  { path: '/anProfile', name: 'profile3page', component: AnProfile },
  { path: '/cuongnmProfile', name: 'profile4page', component: CuongNMProfile },
  { path: '/cuongbptProfile', name: 'profile5page', component: CuongBPTProfile },
  { path: '/duyProfile', name: 'profile6page', component: DuyProfile },
  { path: '/hoangProfile', name: 'profile7page', component: HoangProfile },
  { path: '/kienprofile', name: 'profile8page', component: KienProfile },
  { path: '/lienProfile', name: 'profile9page', component: LienProfile },
  { path: '/vuProfile', name: 'profile10page', component: VuProfile },
  { path: '/vinhProfile', name: 'profile11page', component: VinhProfile },
  { path: '*', name: 'not found', component: NF}
]
  