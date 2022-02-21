import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
const Index = () => {
  const router = useRouter()
  return (
    <div className="w-screen text-2xl font-Saira text-gray-800  h-screen">
      <div className="z-50 fixed top-5 left-5 pb-10">
        <button className='bg-white px-5 py-2 text-sm sm:text-xl rounded-full shadow-lg hover:bg-gray-100 active:border-2 border-white hover:scale-95 transform transition duration-200 ease-out'>
          Login or join
        </button>
      </div>




      <div className="max-w-xl h-full mt-20 mx-auto flex flex-col items-center  p-10">
        <div className="">
          <img src='/abhayjacket.jpg' alt="Abhay Prajapati" className="h-20 w-20 rounded-full" />
        </div>
        <h1 className="font-semibold">
          Abhay Prajapati
        </h1>
        <p className='text-lg'>
          @abhayprajapati
        </p>
        <h2 className='flex'>
          <p className='nametitle hover:text-black' onClick={() => router.push('https://nextjs.org/')}>Next JS </p>{''} / <p className='nametitle hover:text-yellow-500' onClick={() => router.push('https://firebase.google.com/')}> Firebase</p>
        </h2>





        <div className="md:flex items-center mt-2 md:text-2xl space-x-2  text-sm ">
          <button className='nametitle bg-blue-400 px-2 text-white rounded-lg' onClick={() => router.push('https://twitter.com/AbhayPrajapati_')}>Twitter</button>


          <button className='nametitle bg-gradient-to-r from-pink-400 to-orange-300 px-2 text-white rounded-lg' onClick={() => router.push('https://')}>Instagram</button>


          <button className='nametitle bg-green-700 px-2 text-white rounded-lg' onClick={() => router.push('https://github.com/theabhayprajapati/')}>Github</button>


          <button className='nametitle bg-[#0e76a8] px-2 text-white rounded-lg' onClick={() => router.push('https://www.linkedin.com/in/abhayprajaapati/')}>LinkedIn</button>
        </div>



        <div className='grid grid-cols-1 w-full mt-10 gap-y-5'>
          <div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition k ease-out grid place-items-center p-2'>

            <h1 onClick={() => router.push('https://weather-application-nextjs.vercel.app/')} className=''>
              Weather Application ☁️
              {/* //todo: Portfolio name */}
            </h1>
            <p className="text-base">weather updated with AQI</p>
          </div>
          <div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-95 transform transition duration-200 ease-out projecttitle'>
            <h1 className=''>
              Ecommerce Store 🧺
              {/* //todo: Portfolio name */}
            </h1>
            <p className="text-base">with payment gateway 💳</p>

          </div>
          <div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-95 transform transition duration-200 ease-out projecttitle'>
            <h1 onClick={() => router.push('https://twitch-tv-clone.vercel.app/')} className=''>
              Twitch Clone 📄
              {/* //todo: Portfolio name */}
            </h1>
            <p className="text-base">Merged Twitch with Netflix</p>

          </div>
          <div onClick={() => router.push('https://cryptocoincap.netlify.app/')} className='bg-white shadow-lg h-24 rounded-lg projecttitle cursor-pointer hover:scale-95 transform transition duration-200 ease-out'>
            <h1 className=''>
              Crypto Watch Application 🪙
              {/* //todo: Portfolio name */}
            </h1>
            <p className="text-base">first React Project</p>

          </div><div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-95 transform transition duration-200 ease-out projecttitle'>
            <h1 className=''>
              Showcase 👔
              {/* //todo: Portfolio name */}
            </h1>
            <p className="text-base">this is showcase</p>

          </div>
        </div>
        <footer className="m-32  w-full flex justify-around pb-10">
          <h1>Join</h1>
          <h1 onClick={() => router.push('/join')} className="nametitle">Know</h1>
          <h1>Connect</h1>
        </footer>
      </div>
    </div>
  )
}

export default Index