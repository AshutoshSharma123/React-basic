import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  const passwordref = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'asdknadloNOBAIBIHAASNOANINPKPOQWD'
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@$&^#*&**"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])


  const copyPasswordToClipborad = () => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }

  return (
    <div className='  w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 text-blue-900 bg-orange-500 justify-center align-center'>
      <h1 className='text-bold text-white text-center my-3'>Password Generator</h1>
      <div className="flex  shadow rounded-lg overflow-hidden  mb-4">
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordref}
          placeholder='Password' />
        <button onClick={copyPasswordToClipborad()} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
            name=''
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">{length} letters</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((oldval) => !oldval)
            }}
            name=""
            id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((oldval) => !oldval)
            }}
            name=""
            id="" />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
