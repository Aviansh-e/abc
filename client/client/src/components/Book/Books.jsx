import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Books() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
        age: '',
        setlocation: '',
        phonenumber: ''
    });


    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const url = 'https://abcbackend.onrender.com';
    const saveValue = async () => {

        try {
            const response = await axios.post('https://abcbackend.onrender.com/api/details', inputValue);
            console.log('Response:', response.data);
            alert("your data has been  successfully saved");
            navigate('/');
        }
        catch (error) {
            console.log('Error:', error);
            alert("Please fill all the field");
        }

    };

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Registration for the Events</h1>
            <div style={styles.card}>
                <h2 style={styles.cardTitle}>Event Details</h2>
                <p style={styles.cardContent}>Welcome to our event! Please fill out the registration form above to participate.</p>
            </div>

            <div style={styles.formContainer}>
                <input
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    value={inputValue.firstname}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    value={inputValue.lastname}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type='number'
                    placeholder='Age'
                    name='age'
                    value={inputValue.age}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type='text'
                    placeholder='Location'
                    name='setlocation'
                    value={inputValue.setlocation}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type='number'
                    placeholder='Phone Number'
                    name='phonenumber'
                    value={inputValue.phonenumber}
                    onChange={handleChange}
                    style={styles.input}
                />
                <button onClick={saveValue} style={styles.button}>Submit</button>
            </div>

        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    input: {
        width: '250px',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    card: {
        width: '300px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    cardContent: {
        fontSize: '16px',
        color: '#555',
    },
};
