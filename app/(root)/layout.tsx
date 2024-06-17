// root wont be included in url as we have made a route group by paranthesis
// we made root route group for all home page ... its layout will contain..navbar and footer
import { LayoutProps } from '@/.next/types/app/layout';
import MobileNav from '@/components/shared/MobileNav';
import SideBar from '@/components/shared/SideBar';
import React from 'react';

const Layout :React.FC<LayoutProps> = ({children}) => {
  return (
    <main className="root">
    <SideBar />
    <MobileNav />
    <div className="root-container">
        <div className="wrapper">
            {children }
        </div>
    </div>
    </main> 
  )
}

export default Layout;