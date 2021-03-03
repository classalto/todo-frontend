import request from 'superagent';

const URL = 'https://quiet-wildwood-56140.herokuapp.com';

// new user signup
export async function signUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    return response.body;
}
// user login 
export async function login(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
    return response.body;
}
// get all todos from database
export async function getTodos(token) {
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)
    return response.body;
}
// add one new todo to the database
export async function addTodo(todo, token) {
    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ token })
    return response.body;
}
// change one todo to completed
export async function completeTodo(todoId, token ) {
    const response = await request
        .put(`${URL}/api/todos/${todoId}`)
        .set('Authorization', token)
    return response.body;
}