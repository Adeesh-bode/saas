// root wont be included in url as we have made a route group by paranthesis
// we made root route group for all home page ... its layout will contain..navbar and footer
import React from 'react';

const Layout :React.FC = ({children}:{children : React.ReactNode}) => {
  return (
    <main className="root">
    <div className="root-container">
        <div className="wrapper">
            {children }
        </div>
    </div>
    </main>
  )
}

export default Layout