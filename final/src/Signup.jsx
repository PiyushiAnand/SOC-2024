import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    async function handleSignup (){
        const url = role === 'Instructor'
            ? "http://localhost:3000/admin/signup"
            : "http://localhost:3000/users/signup";

            try {
                const response = await axios.post(url, { username, password }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = response.data;
                if (response.status === 200) {
                    console.log('Registration successful:', result);
                    localStorage.setItem('token', result.token);
                    navigate('/courses'); 
                } else {
                    console.error('Registration failed:', result.message);
                }
            } catch (error) {
                console.error('An error occurred:', error.response ? error.response.data : error.message);
            }
    };

    return (
        <div style={{ backgroundColor: "#eeeeee", minHeight: '100vh', paddingTop: 200 }}>
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}>
                <Typography variant={"h5"}>
                    Welcome to LEARNIFY
                </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card variant="outlined" style={{ width: 400, padding: 25 }}>
                    <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        label="Username"
                        variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        label="Password"
                        variant="standard"
                        type="password"
                    />
                    <br />
                    <br />
                    <label htmlFor="role-select">Select your role:</label>
                    <select
                        id="role-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="contained"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Signup;
