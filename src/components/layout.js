import React from "react"
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default Layout