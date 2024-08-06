import { useEffect, useState } from "react";
import { Button, Card, Typography } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/admin/courses/", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            console.log("Server response:", response.data);
            setCourses(response.data.courses);
        })
        .catch((error) => {
            console.error("Error fetching courses:", error);
        });
    }, []);

    const handleAddCourseClick = () => {
        navigate('/addcourse');
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {courses.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <Button
                    size="large"
                    variant="contained"
                    onClick={handleAddCourseClick}
                >
                    Add Course
                </Button>
            </div>
        </>
    );
}

function Course(props) {
    return (
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
            textAlign: 'center'
        }}>
            <Typography variant="h6">{props.course.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{props.course.description}</Typography>
            {props.course.imageLink && <img src={props.course.imageLink} style={{ width: '100%', maxHeight: 150, objectFit: 'cover' }} alt={props.course.title} />}
        </Card>
    );
}

export default Courses;
