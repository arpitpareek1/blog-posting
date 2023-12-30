"use client"
import React, { useState } from 'react';
import styles from './page.module.css'

const ThemedButton = () => {
    const [, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((isDarkTheme) => {
            // Apply theme-specific styles when the component mounts or when the theme changes
            const root = document.documentElement;
            root.style.setProperty('--foreground-rgb', isDarkTheme ? '255, 255, 255' : '254, 254, 254');
            root.style.setProperty('--background-start-rgb', isDarkTheme ? '0, 0, 0' : '214, 219, 220');
            root.style.setProperty('--background-end-rgb', isDarkTheme ? '0, 0, 0' : '255, 255, 255');
            // Add other theme-specific styles here
            return !isDarkTheme
        });
    };

    return (
        <button onClick={toggleTheme}>
            chnage Theme
        </button>
    );
};

const BlogForm = () => {
    const [tags, setTags] = useState('');
    const [postedOn, setPostedOn] = useState('');
    const [blogHtml, setBlogHtml] = useState('');

    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Blog post created successfully!');
            } else {
                console.error('Failed to create blog post');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>
                    Tags:
                    <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                </label>
                <label>
                    Posted On:
                    <input type="date" value={postedOn} onChange={(e) => setPostedOn(e.target.value)} />
                </label>
                <label>
                    Blog HTML:
                    <textarea value={blogHtml} onChange={(e) => setBlogHtml(e.target.value)} />
                </label>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

const blog = () => {

    return (
        <>
            {BlogForm()}
            {ThemedButton()}
        </>
    )
}

export default blog