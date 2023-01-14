// import button from './componets/button/_partials/tpl'
import indexPage from './route';
import './css/main.scss'
// import layouts from "./componets/layouts";

const res = indexPage();
// const la = layouts('full')
// console.log({ la: la() });
const navTpl = `<nav>
    <ul>
        <li><a href="/sign-up">sign-up</a></li>
        <li><a href="/sign-in">sign-in</a></li>
        <li><a href="/messages">messages</a></li>
        <li><a href="/profile">profile</a></li>
        <li><a href="/error404">404</a></li>
        <li><a href="/error500">5**</a></li>
    </ul>
</nav>`
document.getElementById('root').innerHTML = navTpl + res;
