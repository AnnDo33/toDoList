import { useLoaderData } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const tasks = useLoaderData();

  return (
    <main className="container">
      <h1>My to do list</h1>
      <Form task={tasks} />
      <section>
        {tasks.map((task) => (
          <ToDoList task={task} key={task.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
