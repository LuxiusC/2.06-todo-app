import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap"
import { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';

export default function AddTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const todos = useContext(TodoContext).todos
    const setTodos = useContext(TodoContext).setTodos
    const navigate = useNavigate()

    return (
        <Container>
            <h2 className="my-4">Add Todo</h2>
            <Form onSubmit={(event) => {
                event.preventDefault()
                setTodos([
                    ...todos,
                    { id: Date.now(), title, description, completed },
                ])
                navigate('/')
            }}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Get Software Developer Job"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="1. Create Amazing Project
2. Apply to Google
3. Crush Interview
                        "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check
                        type="checkbox"
                        label="Mark as completed"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>
    );
}

