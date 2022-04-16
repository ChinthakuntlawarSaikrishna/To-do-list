// Buddy List //

import React,{useState} from 'react'

const App = () => {

  const[input,setInput] = useState("");
  const[list,setList] = useState([])
  
  const submitHandler = e => {
    e.preventDefault();
    const newList = [...list,input]
    setList(newList)
    setInput("")
    
  }

   const deleteHandler = (result) =>{
    const newList = list.filter((value,index)=>index!==result)
    setList(newList)
   }

  return (
    <>
    <form onSubmit={submitHandler}>
    <input type="text" autocomplete="off" aplaceholder='Enter the name' value={input} name="input" onChange={e=>setInput(e.target.value)} />
    <input type="submit" name="submit"/>
    </form>
    <div>Your Todo list is Here!!!</div>
    <div>
    {list.map((value,index)=><div>{value}<button style= {{backgroundColor:"green"}} onClick={()=>{deleteHandler(index)}}>Delete</button></div>)

  }
    </div>

    </>
  )
}

export default App;
