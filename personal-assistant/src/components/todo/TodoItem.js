import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import TasksContext from '../../TasksContext'; 
import { Paragraph } from '../../styles';


const TodoItem = () => {
  const { id } = useParams();
  const {tasks} = useContext(TasksContext);
  console.log(tasks)

  const findTaskName = (id, tasks) => {
    const foundTask = tasks.find( task => task.id === id)
    return foundTask.name;
  }

  return (
    <div>
      <Paragraph>Task ID: {id} </Paragraph>
      <Paragraph> Task Name: {findTaskName(id, tasks)} </Paragraph>
      <Paragraph>
        <img src="/static/item_img.png" alt="Sad cat with meme heading: 'wya? MY LIMIT BRO I'M AT MY LIMIT'"/> 
      </Paragraph>
      
    </div>
  )
}

export default TodoItem;