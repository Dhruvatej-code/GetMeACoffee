import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center h-16 p-3 items-center '>
        <p>Copyright &copy; {currentYear} Get Me A Coffee - All rights reserved</p>
    </footer>
  )
}

export default Footer
