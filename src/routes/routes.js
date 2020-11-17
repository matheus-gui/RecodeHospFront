import Sobre from '../pages/Sobre';
import Login from '../pages/Login';
import Home from '../pages/Home';

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
}
];

export default routes;