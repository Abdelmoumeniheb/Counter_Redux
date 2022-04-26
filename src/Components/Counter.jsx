import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../Store/Action'

const Counter = () => {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch();
  return (
    <div className="flex items-center justify-center  h-128 "> 
    <div className="flex items-center justify-center gap-5">
    <h1 className="text-4xl">Counter:</h1>
        <div className=" flex justify-between items-center w-64">
        
            <button onClick={()=>dispatch(decrement())} className="rounded px-5 py-2.5 overflow-hidden group bg-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 text-4xl">-</button>
            <span className="text-4xl border-black-500">{count}</span>
            <button onClick={()=>dispatch(increment())} className="rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-4xl">+</button>
        </div>

    </div>
        
    </div>
  )
}
export default Counter;