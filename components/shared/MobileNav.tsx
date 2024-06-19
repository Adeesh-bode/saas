'use client';
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { NavLinks } from '@/constants'
import { Button } from "@/components/ui/button"


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className='header'>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image src='/assets/images/logo-text.svg' alt='logo' width={150} height={34} />
      </Link>

      <nav className='flex gap-3'>
        <SignedIn>
          <UserButton afterSignOutUrl='/'  />
        </SignedIn>
        <Sheet>
          <SignedOut>
            <Button variant="outline" asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
          <SheetTrigger>
            <Image src='/assets/icons/menu.svg' alt='menu' width={30} height={30} />
          </SheetTrigger>
          <SheetContent className='sheet-content sm:w-64'>
            <>
            <Image src='/assets/images/logo-text.svg' alt='logo' width={150} height={34} />
            <ul className='header-nav_elements' >
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
                  <li className='flex-center cursor-pointer gap-2 p-4' >
                      <UserButton afterSignOutUrl='/' showName />
                  </li>
                  <SignedOut>
                    <Button variant="outline" asChild className='w-full flex-center  button bg-purple-gradient bg-cover'>
                      <Link href='/sign-in'>Login</Link>
                    </Button>
                  </SignedOut>
                </ul>
            </>  
          </SheetContent>
        </Sheet>
      </nav>

    </header>
  )
}

export default MobileNav