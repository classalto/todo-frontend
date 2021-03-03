export const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (user && user.token) return JSON.parse(user);

    return {
        email: '',
        id: '',
        token: ''
    }
}

export function setUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}