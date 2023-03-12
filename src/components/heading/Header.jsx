import React from 'react'
import Logo from '../Logo'
import Content from './Content'
import Navbar from './navbar/Navbar'


let element = []
for(let i = 0;i< 6;i++){
    element.push(<Logo bg="white" key={i} />);
}
function Header() {
    return (
        <header style={{backgroundColor: '#0A2640', minHeight: '100vh'}}>
            <Navbar />
            <Content />
            <div>
                <div className="container d-flex flex-wrap gap-5 justify-content-center mt-3" style={{columnGap: '20px'}}>
                    {element}
                </div>
            </div>
        </header>
    )
}

export default Header
