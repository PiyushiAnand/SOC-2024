import React from 'react';
import { Button, Typography, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: "#f5f5f5", minHeight: '100vh', padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Card variant="outlined" style={{ padding: 20, width: 300, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to Learnify
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Discover and learn new skills with our range of courses.
                    </Typography>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/courses')}
                        style={{ marginBottom: 10 }}
                    >
                        View Courses
                    </Button> */}
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default HomePage;
