import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import profileImage from '../tabanghub3.png';

export default function Navbar(){

    return(
      <div className="md:container text-center">
        <div>
          <div>
            <h1 className="text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Welcome</h1>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Login</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label for="email" className="block text-sm font-medium leading-6 text-balance font-serif">Email address</label>
                <div className="mt-2">
                  <input placeholder='Email' name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black-600 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }} />
                </div>
              </div>

              <div>
                <div>
                  <label for="password" className="block text-sm font-medium leading-6 text-black font-serif">Password</label>
                  
                </div>
                <div className="mt-2">
                  <input placeholder='************' name="password" type="password" autocomplete="current-password" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }} />
                </div>
              </div>

              <div>
              <Link href="/Home" className="font-semibold leading-6 text-blue-500 hover:text-white-400">
                <button type="submit" className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Login</button>
              </Link>
              </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-400">
              Dont have an account?
              <Link href="/Register" className="font-semibold leading-6 text-white-500 hover:text-blue-400"> SignUp Here</Link>
            </p>
          </div>
        </div>
      </div>

    );
}