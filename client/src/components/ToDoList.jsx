function ToDoList({ task }) {
  function handleDelete() {}
  return (
    <div>
      <h2>{task.task}</h2>
      <h4>Who : {task.who}</h4>
      <p>Deadline {task.deadline}</p>
      <p>Status: {task.status}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ToDoList;
