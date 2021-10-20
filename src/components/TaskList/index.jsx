import React from "react";
import TaskItem from "./TaskItem";

import "./TaskList.css";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksData: [
        { text: "First task", isChecked: false },
        { text: "Second task", isChecked: true },
        { text: "Third task", isChecked: false },
      ],
    };
  }

  render() {
    const arrayJSX = this.state.tasksData.map((task) => {
      return <TaskItem task={task} />;
    });

    return (
      <div>
        <h4>Task list:</h4>
        <ul>{arrayJSX}</ul>
      </div>
    );
  }
}

export default TaskList;
