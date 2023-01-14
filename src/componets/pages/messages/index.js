import tpl from './_partials/tpl';
import('./_partials/style.scss');

export default (props) => {
    console.log({ tpl, props });
    return tpl;
};
