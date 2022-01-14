import {FlexBox, Link} from './styles'
import React from 'react'

const NavBar = () => {
  return (
    <FlexBox>
        <Link to ="/">Greeting</Link>
        <Link to="/todo">To-Do</Link>
    </FlexBox>
  )
}

export default NavBar;