import React, { useEffect } from 'react';
import { getUser, updateUser, DeleteUser, ListUser, RegisterUser, LoginUser } from '../../service/AxiosService';

const ShowUser = () => {

    useEffect(()=>{
        getUser().then(response => {
            console.log(response.data.data);
        }
        ).catch(err => {
            console.log(err);
        });
    }, []);

    const updateU = ()=>{
        updateUser('jefferson', 'programmer', 2)
        .then(response => {
            if(response.status === 200 && response) {
                alert(JSON.stringify(response.data));
            }
        })
        .catch(err => {
            alert('error:' + err);
        });
    }

    const deleteU = ()=>{
        DeleteUser(2)
        .then(response => {
            if(response.status === 204 && response){
                alert(JSON.stringify(response.status));
            }
        })
        .catch();
    }

    const listU = ()=>{
        ListUser(2)
        .then(response => {
            if(response.status === 200 && response) {
                alert(JSON.stringify(response.data));
            }
        })
        .catch(err => {
            alert('error: ', err);
        })
    }

    const registerU = ()=>{
        RegisterUser('eve.holt@reqres.in', 'pistol')
        .then(response => {
            if(response.status === 200) {
                alert(JSON.stringify(response.data));
                sessionStorage.setItem('token', response.data.token);
            }
        })
        .catch(err => {
            alert('error: '+ err);
        })
    }

    const loginU = ()=>{
        LoginUser('eve.holt@reqres.in', 'cityslicka')
        .then(response => {
            if(response.status === 200) {
                alert(JSON.stringify(response.data));
                localStorage.setItem('token', response.data.token);
            }
        })
        .catch(err => {
            alert('err:' + err);
        })
    }

    return (
        <div>
            <button onClick={ updateU }>Update User</button>
            <button onClick={ deleteU }>Delete User</button>
            <button onClick={ listU }>List User</button>
            <button onClick={ registerU }>Register User</button>
            <button onClick={ loginU }>Login User</button>
        </div>
    );
};

export default ShowUser;