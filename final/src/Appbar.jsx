import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

function Appbar() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token); // For debugging purposes

        axios.get("http://localhost:3000/admin/me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => {
            // Axios automatically parses JSON, so you can access response.data directly
            const data = response.data;
            if (data.username) {
                setUsername(data.username);
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        });
    }, []);

    if (username) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div>
                <Typography>LEARNIFY</Typography>
            </div>


            <div style={{ display: "flex" }}>
                <div>
                    <Typography>{username}</Typography>
                </div>
                <div style={{ marginRight: 10 }}>
                    <Button variant="contained" onClick={() => {
                        localStorage.setItem("token", null);
                        window.location = "/"
                    }}
                    >logout</Button>
                </div>
            </div>

        </div>
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <Typography>LEARNIFY</Typography>
        </div>

        <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>
                <Button variant="contained" onClick={() => navigate("/signup")}>Sign Up</Button>
            </div>
            <div>
                <Button variant="contained" onClick={() => navigate("/login")}>Sign In</Button>
            </div>
        </div>

    </div>

}

export default Appbar