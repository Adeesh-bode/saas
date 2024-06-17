import Image from 'next/image'
import Link from 'next/link';
import React, { Suspense } from 'react'

const SideBar = () => {
  return (
    <aside className="sidebar">
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Suspense fallback={<div className='size-full flex justify-center items-center'>Loading...</div>}>
                    <Image src="/images/logo-text.svg" alt="logo" width={100} height={100} />
                </Suspense>
            </Link>
        </div>
    </aside>
  )
}

export default SideBar;