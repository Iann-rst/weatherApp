import { Drop, MagnifyingGlass, MapPin, Wind } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import './main.css'

function App() {

  const [city, setCity] = useState('');

  function submitForm(event: FormEvent) {
    event.preventDefault();

    if (!city.trim()) {
      alert('Sem mensagem')
    }

    console.log(city)
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b to-cyan-100 from-blue-500">
      <div className="w-full max-w-md bg-blue-600 p-5 rounded-xl shadow-xl">
        <form onSubmit={submitForm}>
          <h3 className='text-white font-bold mb-2 text-center'>Confira o clima de uma cidade:</h3>
          <div className='flex justify-center items-center gap-3'>
            <input
              className='flex-1 p-3 rounded-md bg-blue-100 placeholder:text-black focus:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black' type="text" placeholder='Digite o nome da cidade'

              onChange={(event) => setCity(event.target.value)}
            />

            <button
              type="submit"
              className='p-3 bg-blue-100 rounded-md hover:bg-blue-50 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:ring-offset-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black'
            >
              <MagnifyingGlass className='text-black' size={24} weight='bold' />
            </button>
          </div>
        </form>

        {/* Pegar os dados da api openweather*/}
        <div className="flex flex-col justify-center items-center gap-10 mt-4 text-white font-bold">
          <h2 className="flex justify-center items-center text-2xl">
            <MapPin size={24} weight="bold" />
            <span>Barreiras</span>
            <img className='h-8 w-10 ml-4' crossOrigin='anonymous' src="" alt="Country Flag" />
          </h2>
          <p>Temperatura<span> &deg;C</span></p>

          <div className='flex justify-center items-center gap-4'>
            <p>Nublado</p>
            {/*<img src="" alt="a" />*/}
          </div>

          <div className='flex justify-center items-center gap-4'>
            <p className='flex items-center p-2 gap-1'>
              <Drop size={20} />
              98%
            </p>

            <div className='w-[0.10rem] h-9 bg-white'></div>

            <p className='flex items-center p-2 gap-1'>
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
