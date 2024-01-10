import React from 'react'
import Navbar from './Navbar'

const LayoutPage = ({children}) => {
  return (
    <>
    <Navbar />
    <main> {children} </main>
    </>
  )
}

export default LayoutPage