import Sobre from '../pages/Sobre';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Recepcao from '../pages/Recepcao';
import Internacao from '../pages/Internacao';
import Admin from '../pages/Admin';

const routes = [{
    name: 'Sobre',
    component: Sobre,
    path: '/sobre',
    navbar: true,
},
{
    name: 'Login',
    component: Login,
    path: '/login',
    navbar: true,
},
{
    name: 'Home',
    component: Home,
    path: '/',
    navbar: false,
},
{
    name: 'SignUp',
    component: SignUp,
    path: '/signup',
    navbar: false,
},
{
    name: 'Admin',
    component: Admin,
    path: '/admin',
    navbar: false,
},
{
    name: 'Recepcao',
    component: Recepcao,
    path: '/recepcao',
    navbar: false,
},
{
    name: 'Internacao',
    component: Internacao,
    path: '/internacao',
    navbar: false,
}
];

export default routes;