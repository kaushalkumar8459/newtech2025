import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const MainContent = ({ task, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border rounded p-3 mb-2">
      <div>
        <span className="fw-semibold">
          #{task.id} {task.title}
        </span>
        <div>
          {task.completed ? (
            <Badge bg="success" className="mt-1">Completed</Badge>
          ) : (
            <Badge bg="warning" text="dark" className="mt-1">Pending</Badge>
          )}
        </div>
      </div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default MainContent;
