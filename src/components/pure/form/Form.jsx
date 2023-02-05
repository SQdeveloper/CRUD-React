import React, { useRef } from 'react';
import { createUser } from '../../../service/AxiosService';

const Form = () => {

    const jobRef  = useRef();
    const nameRef = useRef();

    const sendData = (e)=>{
        e.preventDefault();
        createUser(nameRef.current.value, jobRef.current.value)
        .then(response => {
            if(response.status === 201 && response){
                alert(JSON.stringify(response.data));
            }
        })
        .catch(err => {
            alert('err: ', err);
        });
    }

    return (
        <form onSubmit={ sendData }>
            <label htmlFor='name'>Name: </label>
            <input ref={ nameRef } name='name' id='name' type='text' />
            <label htmlFor='job'>Job:</label>
            <input ref={ jobRef } name='job' id='job' type='text' />
            <button type='submit'>Create User</button>
        </form>
    );
};

export default Form;