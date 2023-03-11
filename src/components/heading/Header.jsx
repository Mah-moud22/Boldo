import React from 'react'
import Logo from '../Logo'
import Content from './Content'
import Navbar from './navbar/Navbar'

function Header() {
    return (
        <div style={{backgroundColor: '#0A2640', minHeight: '100vh'}}>
            <Navbar />
            <Content />
            <div>
                <div className="container d-flex flex-wrap gap-5 justify-content-center mt-3" style={{columnGap: '20px'}}>
                    <Logo url="#" />
                    <Logo url="#" />
                    <Logo url="#" />
                    <Logo url="#" />
                    <Logo url="#" />
                    <Logo url="#" />
                </div>
            </div>
        </div>
    )
}

export default Header
