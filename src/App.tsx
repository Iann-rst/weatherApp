import { Drop, MagnifyingGlass, MapPin, Wind } from 'phosphor-react'
import { useState } from 'react'
import './main.css'

const countryFlags = "https://countryflagsapi.com/png";
const appid = '313b67f11426aa37d36d0783e9c7d8f1';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b to-cyan-100 from-blue-500">
      <div className="w-full max-w-md bg-blue-600 p-5 rounded-xl shadow-xl">
        <form>
          <h3 className='text-white font-bold mb-2 text-center'>Confira o clima de uma cidade:</h3>
          <div className='flex justify-center items-center gap-2'>
            <input
              className='flex-1 p-3 rounded-md bg-blue-100  placeholder:text-black' type="text" placeholder='Digite o nome da cidade'
            />

            <button
              className='p-3 bg-blue-100 rounded-md hover:bg-blue-50'
            >
              <MagnifyingGlass className='text-black' size={24} weight='bold' />
            </button>
          </div>
        </form>

        <div className="flex flex-col justify-center items-center gap-10 mt-4 text-white font-bold">
          <h2 className="flex justify-center items-center text-2xl">
            <MapPin size={24} weight="bold" />
            <span>Barreiras</span>
            <img className='h-8 w-10 ml-4' crossOrigin='anonymous' src={`${countryFlags}/br`} alt="Country Flag" />
          </h2>
          <p>Temperatura<span> &deg;C</span></p>

          <div className='flex justify-center items-center gap-4'>
            <p>Nublado</p>
            {/*<img src="" alt="a" />*/}
          </div>

          <div className='flex justify-center items-center gap-4'>
            <p className='flex items-center p-2'>
              <Drop size={20} />
              98%
            </p>
            <div className='w-[0.10rem] h-9 bg-white'></div>
            <p className='flex items-center p-2'>
              <Wind size={20} />
              98%
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
