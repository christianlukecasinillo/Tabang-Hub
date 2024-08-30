
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "../page";
// import logo from "../public/images/logoTabangHub.png";

export default function Profile() {
  return (
<div className="md:container">
    <div className="flex items-center justify-start space-x-8 p-4">
        <Link href={"/Home"}>
            <Image className="mx-2 h-20 w-auto" src="/images/logoTabangHub.png" alt="Tabang Hub Logo" width={100} height={100} />
        </Link>   
            <h1>Profile Setting</h1>
        <div>
            
                <nav className="mt-3 bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex space-x-8">

                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <Link href="/Home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                        <Link href="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                        <Link href="Profile" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Profile</Link>
                        </li>
                        <li>
                        <button type="logout" className=" justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 ">
                        <Link href="/Login" className="block py-2 px-3 text-white-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</Link>
                        </button>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
                </nav>

        </div>
    </div>
    <div className="flex items-center gap-4">
        <Image className="mx-2 h-20 w-auto" src="/images/profile.png" alt="Profile" width={80} height={80} />
            <div class="font-medium dark:text-white">
                <div>Christian Luke Casinillo</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Volunteer</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Skills: Photographer and Videographer</div>
            </div>
    </div>
    
        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BIO</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">I am a dedicated volunteer with a passion for making a positive impact in the community.</p>
        </a>

</div>   
  );
}