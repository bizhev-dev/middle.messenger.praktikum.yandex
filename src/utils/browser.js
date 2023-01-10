// Получение тега для роута
export const getTagRoute = () => {
    return window.location.href.split('/#')[1];
}
