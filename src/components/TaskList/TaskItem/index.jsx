function TaskItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.task.isChecked} />
      {props.task.text}
    </li>
  );
}

export default TaskItem;
