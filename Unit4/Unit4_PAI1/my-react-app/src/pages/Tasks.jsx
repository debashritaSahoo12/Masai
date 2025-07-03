import React, { useState, useEffect } from "react";

function Task({ task, toggleComp }) {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleComp(task.id)} />
      <span>{task.title}</span>
      <p>{task.description}</p>
    </div>
  );
}

function TaskList({ tasks, toggleComp }) {
  if (tasks.length === 0) return <p>No tasks yet!</p>;
  return (
    <div>
      {tasks.map((t) => (
        <Task key={t.id} task={t} toggleComp={toggleComp} />
      ))}
    </div>
  );
}

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title !== "") {
      addTask({ id: Date.now(), title, description, completed: false });
      setTitle("");
      setDescription("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="enter title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="enter description" />
      <button type="submit" disabled={title === ""}>
        Add
      </button>
    </form>
  );
}

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const initTasks = [
        {
          id: 1,
          title: "task1",
          description: "task1 description",
          completed: true,
        },
        {
          id: 2,
          title: "task2",
          description: "task2 description",
          completed: false,
        },
      ];
      setTasks(initTasks);
    }
    fetchTasks();
  }, []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function toggleComp(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
  return (
    <div>
      <h2>Task Management</h2>
      <TaskList tasks={tasks} toggleComp={toggleComp} />
      <AddTask addTask={addTask} />
    </div>
  );
}

export default TaskPage;
