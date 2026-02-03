import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContent from './MainContent';

function Content() {
    const [task, setTask] = useState([
        { id: 1, title: "Learn React Hooks", completed: false },
        { id: 2, title: "Build todo app", completed: true },
        { id: 3, title: "Style dashboard", completed: false },
        { id: 4, title: "Write clean components", completed: false },
        { id: 5, title: "Prepare for interview", completed: true },
    ]);

    const [show, setShow] = useState(true);

    function removeRecord(id) {
        setTask(task.filter(item => item.id !== id));
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="p-4 shadow rounded bg-white">

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0">Action Items</h4>
                            <Button
                                variant={show ? "secondary" : "primary"}
                                size="sm"
                                onClick={() => setShow(!show)}
                            >
                                {show ? "Hide" : "Show"}
                            </Button>
                        </div>

                        {show && task.length === 0 && (
                            <p className="text-muted text-center">No tasks available</p>
                        )}

                        {show &&
                            task.map(item => (
                                <MainContent
                                    key={item.id}
                                    task={item}
                                    onDelete={removeRecord}
                                />
                            ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Content