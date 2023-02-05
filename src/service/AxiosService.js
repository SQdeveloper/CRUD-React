import axios from 'axios';

export const getUser = ()=>{

    return axios.get('https://reqres.in/api/users');
}

export const createUser = (name, job)=>{
    return axios.post('https://reqres.in/api/users', {
        name,
        job
    })
}

export const updateUser = (name, job, id)=>{
    return axios.put(`https://reqres.in/api/users/${id}`, {
        name,
        job
    })
}

export const DeleteUser = (id)=>{
    return axios.delete(`https://reqres.in/api/users/${id}`);
}

export const ListUser = (page)=> {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

export const RegisterUser = (email, password) => {
    return axios.post('https://reqres.in/api/register',
    {
        email,
        password
    });
}

export const LoginUser = (email, password)=> {
    return axios.post('https://reqres.in/api/login',
    {
        email,
        password
    })
}