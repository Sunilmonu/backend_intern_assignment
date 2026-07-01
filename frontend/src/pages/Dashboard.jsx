import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("access")) {
      navigate("/");
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get("tasks/");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch tasks");
    }
  };

  const createTask = async () => {
    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    try {
      if (editingId) {
        await api.put(`tasks/${editingId}/`, {
          title,
          description,
        });

        alert("Task updated successfully");
      } else {
        await api.post("tasks/", {
          title,
          description,
        });

        alert("Task created successfully");
      }

      setTitle("");
      setDescription("");
      setEditingId(null);

      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const editTask = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      await api.delete(`tasks/${id}/`);
      alert("Task deleted successfully");
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Unable to delete task");
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Task Dashboard</h2>

        <button className="btn btn-dark" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="card p-4 mb-4">
        <h4>{editingId ? "Update Task" : "Create Task"}</h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-success" onClick={createTask}>
          {editingId ? "Update Task" : "Add Task"}
        </button>

        {editingId && (
          <button
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setDescription("");
            }}
          >
            Cancel
          </button>
        )}
      </div>

      <h4>Your Tasks</h4>

      {tasks.length === 0 ? (
        <div className="alert alert-info mt-3">
          No tasks found. Create your first task!
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card mb-3">
            <div className="card-body">
              <h5>{task.title}</h5>

              <p>{task.description}</p>

              <p>
                <strong>Status:</strong>{" "}
                {task.completed ? "Completed ✅" : "Pending ⏳"}
              </p>

              <button
                className="btn btn-warning me-2"
                onClick={() => editTask(task)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;