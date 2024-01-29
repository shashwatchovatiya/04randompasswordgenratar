import React, { useState, useCallback, useEffect } from 'react'

export default function Dummy() {
    const [length, setLength] = useState(8);
    const [numberallowed, setNumberallowed] = useState(false);
    const [charactersallowed, setCharactersallowed] = useState(false);
    const [password, setPassword] = useState('');



    const passwordGanretor = useCallback(() => {
        let pass = " ";
        let stringch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberallowed) {
            stringch += "0123456789"
        }
        if (charactersallowed) {
            stringch += "!@#$%^&*?"
        }

        for (let i = 1; i <= length; i++) {
            // 1 methode 
            let char = Math.floor(Math.random() * stringch.length + 1)
            pass = pass + stringch.charAt(char)

            // 2 methode 
            // pass+=stringch.charAt(Math.floor(Math.random() * string))  
        }


        setPassword(pass)
    },
        [length, numberallowed, charactersallowed, setPassword],
    )
    useEffect(() => {
        passwordGanretor();
    }, [length, numberallowed, charactersallowed, passwordGanretor]);

    const Copyfunction =()=>{
        let text =  document.getElementById("Copy");
        text.select();
        text.setSelectionRange(0,999);
        navigator.clipboard.writeText(text.value)
    }
    // console.log(length);
    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        value={password}
                        id='Copy'
                    />
                    <button
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                        onClick={Copyfunction}
                    >copy</button>

                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <label>Length: {length}</label>
                        <input
                            type="range"
                            min={6}
                            max={50}
                            className='cursor-pointer'
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberallowed}
                            id="numberInput"
                            onChange={() => { setNumberallowed((prev) => !prev) }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charactersallowed}
                            id="characterInput"
                            onChange={() => { setCharactersallowed((prev) => !prev) }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}
