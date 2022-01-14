import React from 'react'
import Greeting from './components/Greeting'
import TodoContainer from './components/todo/TodoContainer'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import TodoItem from './components/todo/TodoItem'
import { Provider } from './TasksContext'
// import { nanoid } from 'nanoid'


const App = () => {
  return (
    <Provider>
      <div>
      <NavBar/>
      <Switch>
        <Route path="/todo/:id">
          <TodoItem/>
        </Route>
        <Route path="/todo">
          <TodoContainer/>
        </Route>
        <Route path="/">
          <Greeting/>
        </Route>
      </Switch>
    </div>
    </Provider>
  )
}


export default App


