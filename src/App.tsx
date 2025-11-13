

function App() {

  return (
    <div className='h-dvh bg-gray-100 font-sans'>


      <div className=' grid grid-cols-2 space-x-2   w-full h-full border-2  justify-center items-center  '>

        <div>
          <div className=' border-2 p-2  flex  flex-col '>
            <h1 className=' p-2 text-lg   '><strong>Log in</strong></h1>
            <h2 className=' text-sm p-1'>Email</h2>
            <input type='text' className=' border-2 border-black p-1' />
            <h2 className=' text-sm p-1'>Password</h2>
            <input type='text' className=' border-2 border-black p-1' />

            <button className=' mt-3 bg-black text-white text-sm p-1 hover:cursor-pointer'>Sign in</button>
            <hr className="my-4 border-t border-black" />
            <h3 className=' flex justify-center' > <b className=' text-sm'>Don't have an account yet?</b></h3>
            <button className=' mt-3 bg-black text-white text-sm p-1 hover:cursor-pointer'>Sign up</button>

          </div>
        </div>
<img 
            src="src\assets\unnamed.jpg" 
            alt="Placeholder for login" 
            className="w-full h-full object-cover"
          />      </div>
    </div>
  )
}

export default App
