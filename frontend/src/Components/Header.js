import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <Link className='link' href={`/`}>SHOWSCHOOL</Link>
       <Link className='link'  href={`/add-school`}>ADDSCHOOL</Link>
    </header>
  )
}

export default Header
