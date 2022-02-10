import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>
          Abhay's Builds
        </title>
      </Head>

      <button className='bg-white rounded-full p-1 px-3 hover:bg-slate-50 active:bg-slate-200 z-50 absolute top-5 '>
        Login or Join
      </button>

      <main className=" bg-[#E8E9EF] font-Saira border-2 border-black m-3 h-screen flex-col md:flex">
        <div className='grid place-items-center  m-5'>
          <div className="border-2 border-black grid place-items-center">
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="" className='h-20 w-20 object-contain rounded-full' />
            <h1 className="font-semibold">
              Abhay Prajapati
            </h1>
            <h1>
              @abhayprajapati
            </h1>
            <h1>
              Next JS / Firebase
            </h1>
            <div className="flex justify-evenly gap-1">
              <h1>Twitter</h1>
              <h1>Github</h1>
              <h1>LinkedIn</h1>
              <h1>Instagram</h1>
            </div>
          </div>

        </div>
        <div className="border-2">
          <div className="border-2 bg-red-400 w-[350px] h-[80px] rounded-lg mx-2 flex shadow-lg">
            <div className=" w-[30%] bg-gray-500 h-full rounded-lg grid place-items-center">
              LOGO
            </div>
            <div className="grid place-items-center w-[70%]">
              <h1>
                DISCORD
              </h1>
              <p className='text-center'>
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}
