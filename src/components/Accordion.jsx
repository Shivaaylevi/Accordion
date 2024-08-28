import React, { useState } from 'react'
import data from "./data"
import "./Accordion.css"
const Accordion = () => {
    const[singleSelect,setSingleSelect]=useState(null)
    const[multiClickEnable,setMultiClickEnable]=useState(false)
    const[multiple,setMultiple]=useState([])
    const handleSingleClick=(id)=>{
        setSingleSelect(id===singleSelect?null:id)
    }
    const handleMultipleClick=(id)=>{
        const copy=[...multiple]
        const index=copy.indexOf(id)
        if(index===-1) copy.push(id)
        else copy.splice(index,1)
        setMultiple(copy)

    }
  return (
    <>
    <div className='mainComponent'>
        <h1 className='center'>ACCORDION</h1> 
        <button className='btn' onClick={()=>setMultiClickEnable(!multiClickEnable)}>Enable Multi Select</button>
        {
            data.map((value)=>{
                return(
                    <>
                        <div className='question' title='clickHere' onClick={multiClickEnable?
                        ()=>handleMultipleClick(value.id)
                        :
                        ()=>handleSingleClick(value.id)}>{value.question}</div>
                        {
                            multiClickEnable ?
                            multiple.indexOf(value.id)!==-1 && <div className='answer'>{value.answer}</div>
                            :
                            singleSelect===value.id && <div className='answer'>{value.answer}</div>

                        }
                    </>
                )
            })
        }
    </div>
          
    </>
  )
}

export default Accordion