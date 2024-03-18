import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsCircleHalf } from "react-icons/bs";



const Status = (props) => {
  return (
    <div className="flex justify-center mt-4">
    { 
    props.value == "2" ? <IoCheckmarkDoneSharp className="text-green-600 text" size={20}/>
    : props.value == "1" ? <BsCircleHalf className="text-amber-400" size={20}/>
    :<span></span>
    }
    </div>
)
}

export default Status