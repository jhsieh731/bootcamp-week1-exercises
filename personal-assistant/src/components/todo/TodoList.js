import React from 'react'
import { Button, RouterLink } from '../../styles'
// import { routerLink } from 'react-router-dom'


const TodoList = ({deleteTask, tasks, query}) => {
  const builtList = (tasks) => {
    const mapped = tasks.filter(task => {
      return task.name.includes(query.trim())
    })
    return mapped
  }

  const ListItem = ({ task }) => {
    return (
      <li>
        <RouterLink  to={`/todo/${task.id}`}>
          {task.name}
        </RouterLink>
        <Button type="submit" onClick={() => deleteTask(task)}>
          Delete Task
        </Button>
      </li>
    )
  }

  const list = builtList(tasks)

  return (
    <ul>
      {list.length > 0 ? list.map(task => <ListItem task={task} key={task.id} />) : "No Results"}
    </ul>
  )
}

export default TodoList;