import React, { useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import { ListStyle, Input } from '../../styles'
import TodoList from './TodoList'
import AddTask from './AddTask'
import TasksContext from '../../TasksContext'; 


const TodoContainer = () => {
  const [query, setQuery] = useState('');
  const { tasks, setTasks } = useContext(TasksContext)

  const deleteTask = (wantedTask) => {
    const afterDelTasks = tasks.filter(filterTask => {
      return filterTask.id !== wantedTask.id
    })
    setTasks(afterDelTasks);
  }

  const addTask = (value) => {
    const afterAddTasks = [...tasks, { name: value, id: nanoid() }]
    setTasks(afterAddTasks)
  }

  return (
   
    <ListStyle>
      <Input type="text"
        name="userInput"
        placeholder="Query"
        value={query}
        onChange={e => setQuery(e.target.value)} />

      <TodoList deleteTask={deleteTask} tasks={tasks} query={query}/>
      <AddTask onAddTask={addTask}/>

    </ListStyle>
  )
}

export default TodoContainer;