import React, { Component } from 'react'
import { nanoid } from 'nanoid'

const TasksContext = React.createContext()

class Provider extends Component {
  state = {
    tasks: [
      {
        name: "do this",
        id: nanoid()
      },
      {
        name: "and this",
        id: nanoid()
      }
    ],
  }
  
  // update state
  setTasks = (newTask) => {
    // this.setState( () => ( {tasks: t} ))
    this.setState({tasks: newTask})
  }

  render() {
    const { children } = this.props;
    const { tasks } = this.state;
    const { setTasks } = this;

    return (
      <TasksContext.Provider
        value={{
          tasks,
          setTasks,
        }}
      >
        {children}
      </TasksContext.Provider>
    )
  }
}

export {Provider}

export default TasksContext