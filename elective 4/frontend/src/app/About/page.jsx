
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "../page";
// import logo from "../public/images/logoTabangHub.png";

export default function About() {
  return (
<div className="md:container">
        <div className="flex items-center justify-start space-x-8 p-4">
        <Link href={"/Home"}>
            <Image className="mx-2 h-20 w-auto" src="/images/logoTabangHub.png" alt="Tabang Hub Logo" width={100} height={100} />
        </Link>
        <h1>Tabang Hub</h1> 
        <div>
                
        <nav class="mt-3 bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex space-x-8">

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <Link href="/Home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Home</Link>
                </li>
                <li>
                <Link href="/About" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About</Link>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                <Link href="Profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</Link>
                </li>
                <li>
                <button type="submit" className="justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 ">
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

        <div className="grid grid-cols-1 gap-5">
        <h1 className="justify-center text-center">About Us</h1>
        <p className="justify-center text-center">Tabang Hub is a volunteer matching platform designed to connect local volunteers with community service opportunities in Lapu-Lapu City. Utilizing machine learning technology, 
         the platform matches volunteers' skills with the specific needs of organizations, ensuring that every effort is impactful and tailored. Tabang Hub aims to foster stronger community engagement
         by making it easier for individuals to contribute their talents to meaningful causes.</p>
        </div>
</div>   
  );
}