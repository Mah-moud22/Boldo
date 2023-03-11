import React from 'react'
import image from '../../assets/imgs/hero_graphics.png';
import Button from '../shared/Button';
function Content() {
    return (
        <div className="container d-flex align-items-center py-5 text-start gap-5">
                <div className="d-flex flex-column">
                    <h1 className='text-white'>Save time by building fast with Boldo Template </h1>
                    <p className='text-white'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    <div className="d-flex gap-2">
                        <Button title="Buy Template" />
                        <Button title="Explore" />
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
        </div>
    )
}

export default Content
