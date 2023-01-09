// import button from './componets/button/_partials/tpl'
import indexPage from './route';
// import layouts from "./componets/layouts";

const res = indexPage();
// const la = layouts('full')
// console.log({ la: la() });
document.getElementById('root').innerHTML = res;
