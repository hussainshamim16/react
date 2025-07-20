import React, { useContext } from 'react'
import Cards from '../components/Cards.jsx'
import { counterContext } from '../context/UserContext.jsx'

const PropDriling = () => {
const data = useContext(counterContext)  
  const user = [
    {
      name: "Muhammad Ali",
      age: 16,
      pro: "Web developer",
    },
    {
      name: "Sameer Abbas",
      age: 29,
      pro: "Graphic Designer",
    },
    {
      name: "Rehan Malik",
      age: 31,
      pro: "Seo Expert",
    },
  ]
  return (
    <>
      <h1>Count {data}</h1>
      {user.map((e) => {

        return <Cards key={e.age} Name={e.name} age={e.age} pro={e.pro} />
      })}
    </>
  )
}

export default PropDriling