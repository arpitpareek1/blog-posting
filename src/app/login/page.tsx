// components/LoginForm.js
"use client"
import React, { useEffect } from 'react';
import styles from './page.module.css'
import axios from "axios"

const LoginForm = () => {
    const fetchData = async () => {
        try {
            const response: any = await axios.get('/api', {
                params: {
                    sql: 'SELECT * FROM users',
                  },
            })
            console.log("result", response.data.res);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <main className={styles.main}>

            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br />
                <br />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit" className={styles.center}>Login</button>
            </form>
        </main>
    );
};

export default LoginForm;
