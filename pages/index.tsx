import React from 'react'

const Index = () => {
  return (
    <div className="w-screen text-2xl font-Saira text-gray-800  h-screen">
      <div className="absolute top-5 left-5 pb-10">
        <button className='bg-white px-5 py-2 text-sm sm:text-xl rounded-full shadow-lg hover:bg-gray-100 active:border-2 border-white hover:scale-95 transform transition duration-200 ease-out'>
          Login or join
        </button>
      </div>
      <div className="max-w-xl h-full mt-20 mx-auto flex flex-col items-center  p-10">
        <div className="bg-red-400 rounded-full self-center h-32 w-32">
          asdfkj
        </div>
        <h1 className="font-semibold">
          Abhay Prajapati
        </h1>
        <p className='text-lg'>
          @abhayprajapati
        </p>
        <h2 className=''>
          Next JS/ Firebase
        </h2>
        <div className="flex items-center space-x-5">
          <h1>Twitter</h1>
          <h1>Instagram</h1>
          <h1>Github</h1>
          <h1>LinkedIn</h1>
        </div>
        <div className='grid grid-cols-1 w-full mt-10 gap-y-5'>
          <div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div>
          <div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div><div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div><div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div><div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div><div className='bg-white shadow-lg h-24 rounded-lg cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
            <div>
              {/* //todo: Image */}
            </div>
            <h1>
              skdf
              {/* //todo: Portfolio name */}
            </h1>
          </div>
        </div>
        <footer className="m-32  w-full flex justify-around pb-10">
          <h1>Join</h1>
          <h1>Know</h1>
          <h1>Connect</h1>
        </footer>
      </div>
    </div>
  )
}

export default Index