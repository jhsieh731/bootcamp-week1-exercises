import React, {useState, useRef} from 'react'
import {Input, Button} from '../../styles'

const AddTask = (props) => {
  const { onAddTask } = props;

  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('')

  const addTask = (e) => {
    e.preventDefault();
    const input = inputRef.current;
    onAddTask(input.value);
    setInputValue('');
  }

  const onChange = e => {
    console.log(e);
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <Input type="text"
          placeholder="New task"
          ref={inputRef}
          value={inputValue}
          onChange={onChange}
        />
        <Button type="submit" >Add Task</Button>
      </form>
    </div>
  )
}

export default AddTask;