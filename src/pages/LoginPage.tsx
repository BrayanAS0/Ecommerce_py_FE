import { useState } from 'react'; 
import Button from "../components/Button";
import { Input } from "../components/Input";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='h-dvh bg-gray-100 font-sans overflow-hidden'>
      
      <div className='grid grid-cols-2 w-full h-full border-2 justify-center items-center relative'>

    
        <div className={`p-4 transition-transform duration-700 ease-in-out z-10 ${isLogin ? 'translate-x-0 order-1' : 'translate-x-full order-2'}`}>
          <div className='border-2 p-6 flex flex-col bg-white shadow-lg rounded-lg'>
            
            <h1 className='p-2 text-lg text-center mb-4'>
              <strong>{isLogin ? 'Log in' : 'Create Account'}</strong>
            </h1>

            <div className={`transition-all duration-500 overflow-hidden ${!isLogin ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                 <h2 className='text-sm p-1'>Full Name</h2>
                 <input type='text' className='border-2 border-black p-1 mb-2 w-full' />
            </div>

            <h2 className='text-sm p-1'>Email</h2>
            <input type='text' className='border-2 border-black p-1' />
            
            <h2 className='text-sm p-1'>Password</h2>
            <input type='password' className='border-2 border-black p-1' />

            <div className="mt-4">
               <Button label={isLogin ? "Sign in" : "Register"} />
            </div>

            <hr className="my-4 border-t border-black" />

            <div className='flex flex-col justify-center items-center'>
               <b className='text-sm mb-2'>
                 {isLogin ? "Don't have an account yet?" : "Already have an account?"}
               </b>
               <div onClick={toggleMode} className="cursor-pointer">
                  <Button label={isLogin ? "Sign up" : "Go to Login"}/>
               </div>
            </div>

          </div>
        </div>


        <img
          src="src/assets/unnamed.jpg" 
          alt="Placeholder"
          className={` h-full object-cover absolute top-0 right-0 w-[50%] transition-transform duration-700 ease-in-out ${isLogin ? ' order-2 translate-x-0' : '-translate-x-full order-1'}`}
        />
        
      </div>
    </div>
  );
}