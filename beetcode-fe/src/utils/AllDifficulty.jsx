import React from 'react'

const Difficulty = (props) => {
    console.log(props.value)
    return (
        <>
        { props.value == "0" ? <span className="text-green-600">Easy</span> 
        : props.value == "1" ? <span className="text-amber-400">Medium</span> 
        : <span className="text-red-600">Hard</span> }
        </>
    )
}

export default Difficulty