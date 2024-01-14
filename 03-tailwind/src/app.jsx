import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from '../../03-tailwind/src/components/Card'


export function App() {


  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='Ashutosh Sharma' post="Software Developer" imgclass='mw-18% h-10 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
        imageSrc="./pic.jpg"
        alt='image'
      // width='384'
      // height='512' 
      />
      <Card />
      <Card />
    </>
  )
}
