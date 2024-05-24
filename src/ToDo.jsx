import React, { useState } from "react";
import { DarkMode, LightMode, RemoveCircleOutline } from "@mui/icons-material";
import { Button, Checkbox, TextField } from "@mui/material";

function ToDo() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState([]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "light") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  const lightTheme = () => {
    document.body.style.backgroundColor = "wheat";
    document.body.style.color = "rgb(4, 13, 31)";
  };

  const darkTheme = () => {
    document.body.style.backgroundColor = "rgb(4, 13, 31)";
    document.body.style.color = "wheat";
  };

  const handleAddTask = () => {
    const inputTask = document.getElementById("outlined-textarea").value;
    if (inputTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length, name: inputTask, completed: false },
      ]);
      document.getElementById("outlined-textarea").value = "";
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckbox = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div>
      {/* buttons */}
      <div className="buttons">
        <Button variant="text" color="success" onClick={toggleTheme}>
          {theme === "light" ? <LightMode /> : <DarkMode />}
        </Button>
      </div>

      {/* todo app */}
      <div className="main">
        <h1 className="title">To Do 📝</h1>
        <TextField
          id="outlined-textarea"
          label="Enter Task"
          placeholder="start typing..."
          variant="outlined"
          className="myTextField"
          inputProps={{
            style: { color: "rgb(212, 11, 38)", fontWeight: "bolder" },
          }}
        />
        <br />
        <Button
          variant="contained"
          className="addButton"
          style={{
            backgroundColor: "rgb(212, 11, 38)",
            color: "wheat",
            fontWeight: "bolder",
            marginTop: "10px",
            alignContent: "center",
          }}
          onClick={handleAddTask}
        >
          Add Task
        </Button>

        {/* User's Tasks */}
        <div className="taskCards">
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <Checkbox
                color="success"
                checked={task.completed}
                onChange={() => handleCheckbox(task.id)}
              />
              <h3
                style={task.completed ? { textDecoration: "line-through" } : {}}
              >
                {task.name}
              </h3>
              <div className="removeBtn">
                <Button
                  variant="text"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <RemoveCircleOutline />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
