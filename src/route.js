import SignInPage from "./componets/pages/signIn";
import SignUpPage from "./componets/pages/signUp";
import ErrorPage from "./componets/pages/error404";
import Error500Page from "./componets/pages/error500";
import MessagesPage from "./componets/pages/messages";
import ProfilePage from "./componets/pages/profile";

export default () => {

    const path = window.location.pathname;
    // console.log({ path });
    // FIXME: Сделать нормальный компилер \ роутинг
    if (path === '/sign-in') {
        return SignInPage({data: 'data'});
    }
    if (path === '/sign-up') {
        return SignUpPage({data: 'data'});
    }
    if (path === '/error') {
        return ErrorPage({data: 'data'});
    }
    if (path === '/messages') {
        return MessagesPage({data: 'data'});
    }
    if (path === '/profile') {
        return ProfilePage({data: 'data'});
    }
    if (path === '/error404') {
        return ErrorPage({data: 'data'});
    }
    if (path === '/error500') {
        return Error500Page({data: 'data'});
    }

    return ErrorPage({data: 'Где я?'})
}
