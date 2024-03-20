

import  {useState} from 'react'
export function App() {
  const [color, setColor] = useState();

  return (
  
  
    < div className="w-full h-screen duration-200 text-3xl font-bold  "
  style={{backgroundColor:color}}
    >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap gap-3 bg-blue-200 px-2 py-2 rounded-sm">
        <button onClick ={()=>setColor("red")} className='outline-none px-4 text-white bg-red-700 rounded-2xl'>Red</button>
        
      </div>
      <div className="flex flex-wrap gap-3 bg-blue-200 px-2 py-2 rounded-sm">
        <button onClick ={()=>setColor("blue")} className='outline-none px-4 text-white bg-blue-700 rounded-2xl'>Blue</button>
        
      </div>
      <div className="flex flex-wrap gap-3 bg-blue-200 px-2 py-2 rounded-sm">
        <button onClick ={()=>setColor("green")} className='outline-none px-4 text-white bg-green-700 rounded-2xl'>Green</button>
        
      </div>
      <div className="flex flex-wrap gap-3 bg-blue-200 px-2 py-2 rounded-sm">
        <button onClick ={()=>setColor("yellow")} className='outline-none px-4 text-white bg-yellow-400 rounded-2xl'>Yellow</button>
        
      </div>


      <div className="flex flex-wrap gap-3 bg-blue-200 px-2 py-2 rounded-sm">
        <button onClick ={()=>setColor("orange")} className='outline-none px-4 text-white bg-orange-400 rounded-2xl'>Orange</button>
        
      </div>
    </div>
    </div>
  
  
  
  
  )
}
