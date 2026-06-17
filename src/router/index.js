import { createRouter, createWebHistory } from 'vue-router';
import Convite from '../views/Convite.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import ListaPresentes from '../views/ListaPresentes.vue';

const routes = [
  {
    path: '/',
    name: 'Convite',
    component: Convite
  },
  {
    path: '/lista-presentes',
    name: 'ListaPresentes',
    component: ListaPresentes
  },
  {
    path: '/login', 
    name: 'Login',
    component: Login
  },
  {
    path: '/painel-noivos-secreto', 
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// A Guarda de Rota Cirúrgica (Segurança + UX)
router.beforeEach((to, from, next) => {
  const estaLogado = sessionStorage.getItem('noivos_auth') === 'liberado';

  // 1. Se tentar acessar o painel (rota protegida) sem estar logado -> chuta pro login
  if (to.meta.requiresAuth && !estaLogado) {
    next('/login');
  } 
  // 2. Se tentar acessar a tela de login já estando logado -> pula direto pro painel
  else if (to.path === '/login' && estaLogado) {
    next('/painel-noivos-secreto');
  } 
  // 3. Caso contrário (rotas públicas ou painel já logado) -> acesso livre
  else {
    next();
  }
});

export default router;