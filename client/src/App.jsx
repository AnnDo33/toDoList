import { useLoaderData } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const tasks = useLoaderData();

  return (
    <main className="container">
      <h1>My to do list</h1>
      <section>
        {tasks.map((task) => (
          <ToDoList task={task} key={task.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
