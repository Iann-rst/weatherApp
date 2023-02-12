import { Drop, MagnifyingGlass, MapPin, Wind } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import './main.css'

const appId = '313b67f11426aa37d36d0783e9c7d8f1'  // .env
const iconWeather = 'http://openweathermap.org/img/wn'
const countryFlags = 'https://countryflagsapi.com/png'

interface dataProps {
  cod: string | number;
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
  weather: [{
    description: string;
    icon: string;
    main: string;
  }];
  wind: {
    speed: number
  };
}

function App() {

  const [city, setCity] = useState('');
  const [data, setData] = useState<dataProps>()

  async function submitForm(event: FormEvent) {
    event.preventDefault();

    if (!city.trim()) {
      return alert('Informe o nome da cidade')
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appId}&lang=pt_br`)

    const formattedResponse = await response.json()
    setData(formattedResponse)
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
              value={city}
            />

            <button
              type="submit"
              className='p-3 bg-blue-100 rounded-md hover:bg-blue-50 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:ring-offset-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black'
            >
              <MagnifyingGlass className='text-black' size={24} weight='bold' />
            </button>
          </div>
        </form>

        {/* Mostrar os dados da api openweather*/}
        {data?.cod === 200 &&
          <div className="flex flex-col justify-center items-center gap-5 mt-8 border-t border-white text-white font-bold">
            <h2 className="flex justify-center items-center text-2xl mt-4">
              <MapPin size={24} weight="bold" />
              <span className='ml-4'>{data.name}</span>
              <img
                className='h-8 w-10 ml-4'
                crossOrigin='anonymous'
                src={`${countryFlags}/${data.sys.country}`}
                alt="Country Flag" />
            </h2>
            <p>{data.main.temp}<span> &deg;C</span></p>

            <div className='flex justify-center items-center gap-4'>
              <p className='uppercase'>{data.weather[0].description}</p>
              <img
                crossOrigin='anonymous'
                src={`${iconWeather}/${data.weather[0].icon}.png`}
                alt="Ícone sobre a condição climática da região" />
            </div>

            <div className='flex justify-center items-center gap-4'>
              <p className='flex items-center p-2 gap-1'>
                <Drop size={20} />
                {data.main.humidity} %
              </p>

              <div className='w-[0.10rem] h-9 bg-white'></div>

              <p className='flex items-center p-2 gap-1'>
                <Wind size={20} />
                {data.wind.speed} km/h
              </p>
            </div>
          </div>
        }

        {
          data?.cod === '404' &&
          <div className="flex flex-col justify-center items-center gap-5 mt-8 border-t border-white text-white font-bold">
            <p>Informe um nome de cidade válido</p>
          </div>
        }

      </div>

    </div>
  )
}

export default App
