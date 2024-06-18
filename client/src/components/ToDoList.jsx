function ToDoList({ task }) {
  return (
    <div>
      <h2>{task.task}</h2>
      <h4>Who : {task.who}</h4>
      <p>Deadline {task.deadLine}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default ToDoList;
