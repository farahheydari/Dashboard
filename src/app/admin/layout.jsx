import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function layout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
