function Form({ task }) {
  return (
    <div>
      <label htmlFor="">
        Tasks:
        <input type="text" value={task.task} />
      </label>
    </div>
  );
}

export default Form;
