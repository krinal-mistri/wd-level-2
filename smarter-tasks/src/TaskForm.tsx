import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
}
// interface TaskFormState {
// }
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: ""
    }
  }
  
  inputRef = React.createRef<HTMLInputElement>();
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  render(){
    return (
        <form className="mt-10" onSubmit={this.addTask}>
        <input type="text" value={this.state.title} className="ms-10 border-2 rounded-md border-indigo-500/75" onChange={this.titleChanged}/>
        <button type="submit" className="ms-10 border-2 rounded-md border-indigo-500/75 bg-indigo-500">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;