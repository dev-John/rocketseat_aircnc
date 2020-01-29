import React, { useEffect } from 'react';
import api from '../../services/api';

export default function Profile() {

    useEffect(() => { 
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/profile', {
                headers: { user_id }
            });

            console.log(response.data);
        }

        loadSpots();
    }, []);

    return <h1>Profile</h1>
}