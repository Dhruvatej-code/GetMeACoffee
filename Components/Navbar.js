"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from "react"

const Navbar = () => {

  const [showdroupdown, setShowdroupdown] = useState(false)
  const { data: session } = useSession()
  //  if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-gray-900 text-white flex justify-between  p-3 items-center md:h-16 flex-col md:flex-row '>
        <Link href={"/"} className='logo font-bold flex items-center justify-center'>
        <span> Get Me a Coffee!</span>
        <img width={43} src="coffee.gif" alt="coffee" />
        </Link>
      
      {/* <ul className='flex justify-between gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div className='relative'>

        {session && <><button onClick={()=>setShowdroupdown(!showdroupdown)} onBlur={()=>{setTimeout(() => {
           {setShowdroupdown(false)}
        }, 100);}}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-center  mx-5 inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 my-2    focus:outline-none" type="button">
          Welcome {session.user.name}
          <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
        </button>

          {/* Dropdown menu  */}
          <div id="dropdown" className={`z-10 ${showdroupdown?"":"hidden"}  absolute left-[78px] bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 bg-black`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={()=> {signOut()}} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
              </li>
            </ul>
          </div></>
        }


        

        {!session && <Link href={"/login"}><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5' >Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
