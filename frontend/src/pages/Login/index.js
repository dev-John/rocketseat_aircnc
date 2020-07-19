import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({ history }) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const response =  await api.post('/sessions', { email });
    
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/profile');        
        
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            {/* <span className="required-field" htmlFor="email"> { validator ? '' : 'este campo é obrigatório' }</span> */}
            <input 
                type="email" 
                id="email" 
                placeholder="seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)} 
            />

            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}