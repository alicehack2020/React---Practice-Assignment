import React, { useState } from 'react'
import adbul from "./adbul.jpg"
import "./App.css"
const App = () => {

  const [age,setAge]=useState(18)
  const [show,setShow]=useState("show more details");
  const [location,setLocation]=("Location:Bengluru");
  const [org,setOrg]=("Orgnazation:Masai School");

  const inc=()=>{
    setAge(age+1)
  }

  const dec=()=>{
    setAge(age-1)
  }


  const details=()=>
  {
    if(show==="show more details")
    {
      setShow("hide more details")
      setLocation("Location:Bengluru")
      setOrg("Orgnazation:Masai School")
    }
    else{
      setShow("show more details")
       setLocation("")
       setOrg("")
    }
   
  }

  return (
    <div className='flex'>
      <div>
        <img src={adbul} alt="" />
        <h1>Name:Abdul jabbar Peer</h1>
        <h1>Age:{age}</h1>

        <div>
          <button onClick={inc}>inc age</button>
          <button onClick={dec}>dec age</button>
          <button onClick={details}>{show}</button>
        </div>

        <div>
             <h1>{location}</h1>
             <h1>{org}</h1>
        </div>

<div>
   
</div>


      </div>
       
       <div>
        <h1>Todo List</h1>
        <h3 className='green'>wake up</h3>
        <h3 className='red'>drink tea</h3>
        <h3 className='green'>eat maggi</h3>
        <h3 className='red'>sleep</h3>
       </div>
    </div>
  )
}

export default App