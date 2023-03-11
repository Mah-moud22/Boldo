import React from 'react'
import styles from './services.module.css'
import Testimonial from './Testimonial'
import Author1 from '../../assets/imgs/Author1.png';
import Author2 from '../../assets/imgs/Author2.png';
import Author3 from '../../assets/imgs/Author3.png';
function Testimonials() {
    return (
        <div className={`text-start py-5 ${styles.testimonials}`}>
            <div className="container">
                <h3>An enterprise template to ramp up your company website</h3>
                <div className='d-flex justify-content-evenly mt-5'>
                    <Testimonial quote="Buyer buzz partner network disruptive non-disclosure agreement business" image={Author1} />
                    <Testimonial quote="Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor." image={Author2} />
                    <Testimonial quote="Release facebook responsive web design business model canvas seed money monetization." image={Author3} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
