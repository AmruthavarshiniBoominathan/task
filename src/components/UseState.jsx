import React, { useState } from 'react'
export default function UseState() {
    const[value,setValue]=useState(0);
    const Increment=()=>{
        setValue(value+1);
};
  return (
    <div>
        <p>count: {value}</p>
        <button onClick={Increment}>click</button>
    </div>
  )
}

