import { useState, useCallback, useEffect } from 'react';

import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJGLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^^&*(){}?><{}<~';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-md px-3 py-2 text-white bg-slate-400'>
        <h1 className='font-bold text-3xl'>Password Generator</h1>
        <div className='flex-shadow rounded-lg mb-4 overflow-hidden flex mt-2'>
          <input
            type='text'
            value={password}
            className='outline-none w-full rounded-md px-1 text-blue-900'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none text-white bg-green-700 font-bold px-3 py-0.5 rounded-sm shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              className='cursor-pointer'
              onChange={() => {
                setCharAllowed((prev) => {
                  !prev
                })
              }}
            />
            <label>Character</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => {
                  !prev
                })
              }}
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
