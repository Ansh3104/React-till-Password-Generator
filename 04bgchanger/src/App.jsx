import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [Color, setColor] = useState('olive')
  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          // onClick={()=>changeColor('red')}
          onClick={()=>setColor('red')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test1</button>
          <button 
          // onClick={()=>changeColor('blue')}
          onClick={()=>setColor('blue')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test2</button>
          <button 
          // onClick={()=>changeColor('red')}
          onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test1</button>
          
          <button 
          // onClick={()=>changeColor('red')}
          onClick={()=>setColor('violet')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test1</button>
          <button 
          // onClick={()=>changeColor('red')}
          onClick={()=>setColor('purple')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test1</button>
          <button 
          // onClick={()=>changeColor('red')}
          onClick={()=>setColor('grey')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test1</button>
          
        </div>

      </div>
    </div>
  )
}

export default App
