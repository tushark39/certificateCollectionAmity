import React from 'react'
import { Footer, Header } from '../Helper/HeaderFooter'
const Base = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
export default Base;