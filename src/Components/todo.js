import React, { Component } from "react";

export default class todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: "Learning React", id: 1 },
        { task: "JS Interview Prep", id: 2 },
        { task: "Reading", id: 3 },
      ],
      currentTask: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      currentTask: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currentTask, id: this.state.tasks.length + 1 },
      ],
      currentTask: "",
    });
  };
  //WE USE SPREAD OPEARATOR ABOVE B'COZ IN REACT EVERY CHANGE TAKES PLACE ON IMMUTABLE EITHER IT'S AN ARRAY OR STRING
  //BY USING THE SPREAD OPERATOR WE ARE PROVIDING THE ARRAY A NEW ADDRESS WHERE IT CAN MANIPULATE WITH THE ARRAY..
  handleDelete = (id) => {
    let newArr = this.state.tasks.filter((taskObj) => {
      return taskObj.id != id;
    });

    this.setState({
      tasks: [...newArr],
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentTask}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}> Submit</button>
        <ul>
          {this.state.tasks.map((taskObj) => (
            <li key={taskObj.id}>
              <h2>{taskObj.task}</h2>
              <button onClick={() => this.handleDelete(taskObj.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// export const arr = [1, 2, 3];
