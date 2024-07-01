import React from 'react'

const Header = ({ title , subtitle } : { title:string , subtitle? : string}) => {
  return (
    <>
    <h2>{ title }</h2>
    { subtitle && <p>{ subtitle }</p> }
    </>
  )
}

export default Header