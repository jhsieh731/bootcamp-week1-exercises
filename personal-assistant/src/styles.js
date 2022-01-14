import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Input = styled.input`
  width: 90%;
  box-sizing: border-box;
  padding: 12px 20px;
  margin: 1.5em;
  border-radius: 4px;
`

export const ListStyle = styled.ul`
  list-style-position: outside;
  margin: 30px;
  padding: 25px;
  background: lightcyan;
  list-style-type: circle;
`


export const Button = styled.button`
  background: lightblue;
  border-radius: 5px;
  border: 1 px solid palevioletred;
  color: black;
  margin: 1em;
  padding: 0.25em 1.0em;

  &:hover {
      color: white;
    }
`

export const Header = styled.h1`
  font-family: 'Luxurious Roman', cursive;
  text-align: center;
`

export const Paragraph = styled.p `
  text-align: center;
  font-family: 'Luxurious Roman', cursive;
  letter-spacing: 3px;
`

export const RouterLink = styled(Link) `
  text-decoration: none;
  font-family: 'Luxurious Roman', cursive;
  color: black;

  &:hover {
    color: gray;
  }
`