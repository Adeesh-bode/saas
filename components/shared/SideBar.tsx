'use client';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React, { Suspense } from 'react'
import { NavLinks } from '@/constants';
import { usePathname } from 'next/navigation'; // hook by next
import { Button } from "@/components/ui/button"


const SideBar = () => {
  const pathname = usePathname(); // for current url path // earlier window.location.pathname
  return (
    <aside className="sidebar">
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Suspense fallback={<div className='size-full flex justify-center items-center'>Loading...</div>}>
                    <Image src="/assets/images/logo-text.svg" alt="logo" width={100} height={100} />
                </Suspense>
            </Link>

            <nav className='sidebar-nav' >
              <SignedIn> {/*  navlinks will be shown only when user is signed in */}
                <ul>
                  {
                    NavLinks.map((link)=>{
                      const isActive = link.route === pathname;
                      return(
                        <li key={link.route}  
                        className={`sidebar-nav_element group ${isActive? ' bg-purple-gradient text-white': 'text-gray-700'} 
                        `}>
                          <Link href={link.route} className='sidebar-link' >
                            <Image src={link.icon} alt='nav links logo' width={24} height={24} className={` ${isActive && 'brightness-200' }`} />
                            <div>{link.label}</div>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </SignedIn>

              <SignedOut>
                <Button variant="outline">Button</Button>
              </SignedOut>
            </nav>

        </div>
    </aside>
  )
}

export default SideBar;