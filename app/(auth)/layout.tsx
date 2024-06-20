// we made auth  route group for all auth related  pages ... auth layout are mostly empty but can be still used for fonts
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">{children}</main>
  )
}

export default Layout