import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleAddCourse = () => {
        axios.post("http://localhost:3000/admin/courses", {
            title: title,
            description: description,
            imageLink: image,
            published: true
        }, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            alert("Course added");
            // Optionally, clear the form fields or redirect
            setTitle("");
            setDescription("");
            setImage("");
        })
        .catch((error) => {
            console.error("Error adding course:", error);
            alert("Failed to add course");
        });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 300, backgroundColor: "#eeeeee" }}>
            <Card variant="outlined" style={{ width: 400, padding: 25 }}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    fullWidth={true}
                    label="Title"
                    variant="standard"
                />
                <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    fullWidth={true}
                    label="Description"
                    variant="standard"
                />
                <TextField
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    fullWidth={true}
                    label="Image Link"
                    variant="standard"
                />
                <Button
                    size='large'
                    variant="contained"
                    onClick={handleAddCourse}
                >
                    Add Course
                </Button>
            </Card>
        </div>
    );
}

export default AddCourse;
