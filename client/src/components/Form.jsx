import { useState } from "react";
import connexion from "../services/connexion";

const initialTask = {
  task: "",
  who: "",
  deadline: "",
  id_status: null,
};

function Form() {
  const [task, setTask] = useState(initialTask);

  const handleTask = (event) => {
    setTask((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/tasks", task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <label>
        Tasks:
        <input
          type="text"
          value={task.task}
          name="task"
          onChange={(event) => handleTask(event)}
          required
        />
      </label>
      <label>
        Who:
        <input
          type="text"
          value={task.who}
          name="who"
          onChange={(event) => handleTask(event)}
          required
        />
      </label>
      <label>
        Deadline:
        <input
          type="text"
          value={task.deadline}
          name="deadline"
          onChange={(event) => handleTask(event)}
          required
        />
      </label>
      <label>
        Status:
        <input
          type="number"
          value={task.id_status}
          name="id_status"
          onChange={(event) => handleTask(event)}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
