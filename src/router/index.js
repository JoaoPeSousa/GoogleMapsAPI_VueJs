import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio'
import FaleConosco from '@/views/FaleConosco'
import LoginCadastro from '@/views/LoginCadastro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/FaleConosco',
    name: 'FaleConosco',
    component: FaleConosco
  },
  {
    path: '/LoginCadastro',
    name: 'LoginCadastro',
    component: LoginCadastro
  }
]

const router = new VueRouter({
  routes
})

export default router
