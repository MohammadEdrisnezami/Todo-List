import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const [todo,setTodo]=useState('')
     const [todos,setTodos]=useState([])
     const addList=()=>{
       if(!todo.trim()===''){
        alert('Please enter a value')
    
       }else{
        setTodos([...todos,todo])
        setTodo('')
       }
     }
     const removeItem = (index)=>{
      setTodos(todos.filter((_,i)=> i !==index))
     }
  return (
    <div className="App">
         <p className='bg-blue-500 font-bold underline' >helo</p>
         <input type="text" onChange={(e)=>{ setTodo(e.target.value)}} />
         <button onClick={addList}  >Add</button>
         <ul> {todos.map((item,index)=> <li key={index}>{item} <button onClick={()=>removeItem(index)} >x</button> </li>)} </ul>
      </div>
     
  )
}

export default App
