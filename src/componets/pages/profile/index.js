import tpl from './_partials/tpl'
import avatarEmpty from './_partials/avatar_empty.png'
export default (props) => {
    return tpl.replace('{{avatarEmpty}}', avatarEmpty);
};
