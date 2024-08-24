import Image from 'next/image';
import Link from 'next/link';



export default function Register(){

    return (
        <div className="md:container text-center">
            <div >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <p className="mt-5 text-left text-sm text-gray-400">
                        <Link href="/Login" className="font-semibold leading-6 text-white-500 hover:text-blue-400"> Back</Link>
                    </p>
                <h1 className="mt-5 text-center text-4xl font-bold  text-gray-600">Register</h1>
                <h2 className="mb-5 text-center text-2xl font-bold text-gray-600">Input all neccessarry fields</h2>
               
                

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
                            <div className="mt-2">
                                <input placeholder='Email' name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black-600 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }}/>
                            </div>
                        </div>

                        <div>
                            <div className="md:container text-center">
                                <label for="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                                
                            </div>
                            <div className="mt-2">
                                <input placeholder='Password' name="password" type="password" autocomplete="current-password"  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" style={{ paddingLeft: '12px' }}/>
                            </div>
                        </div>

                        <div>
                        <Link href="/Home" className="font-semibold leading-6 text-gray-500 hover:text-blue-400">
                        <button type="submit" className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Register</button>
                        </Link>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
}