import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count, setCount] = useState(6);

    useEffect (() => {
        let myInterval = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        // Clear the interval when the component unmounts or when count becomes false
        return () => {
            clearInterval(myInterval)
        }
    })
  return (
    <h1 className='text-5xl font-bold font-mono text-gray-600'>{count}</h1>
  )
}
