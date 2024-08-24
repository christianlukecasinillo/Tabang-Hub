
import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
   <div>
   <h1>Welcome to Landing Page</h1>
   <div>
        <Link href="/Login" className="font-semibold leading-6 text-gray-500 hover:text-blue-400">
          <button type="submit" className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Logout</button>
        </Link>
    </div>
   </div>
  );
}