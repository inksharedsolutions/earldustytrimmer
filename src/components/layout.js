import React from "react"
import Footer from './footer'
import Audio from './audio'
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Audio />
            <Footer />
            
        </>
    )
}

export default Layout