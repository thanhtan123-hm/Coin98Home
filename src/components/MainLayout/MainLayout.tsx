import React, { Fragment } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from '../view/Home/Home'


const MainLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <Fragment>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
  )
}

export default MainLayout