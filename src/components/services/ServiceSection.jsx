import React from 'react'
import styles from './services.module.css'
import image1 from '../../assets/imgs/serviceSection1.png'
import image2 from '../../assets/imgs/serviceAnalysis1.png'
import image3 from '../../assets/imgs/serviceSection2.png'
import image4 from '../../assets/imgs/serviceAnalysis2.png'
import { FaCheckCircle , FaFeather} from 'react-icons/fa';
import { RxEyeOpen , RxSun } from 'react-icons/rx';
import Button from '../shared/Button'
const floatImage = {
    position: 'absolute',
    bottom: '-30%',
    left: '50%',
    transform: 'translate(-30%, 0)',
}
const floatImage2 = {
    position: 'absolute',
    bottom: '-40%',
    left: '5%',
}
function ServiceSection() {
    return (
        <>
        <div className={`text-start d-flex flex-column gap-5 py-5 ${styles.service_section}`}>
            <div className='d-flex align-items-center gap-5'>
                <div className={styles.image}  style={{ position: 'relative' }}>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" style={floatImage} />
                </div>
                <div className='w-100'>
                    <h3 className='w-75'>We connect our customers with the best, and help them keep up-and stay open.</h3>
                    <ul className='p-0'>
                        <li><span className='me-2'><FaCheckCircle /></span>We connect our customers with the best.</li>
                        <li><span className='me-2'><FaCheckCircle /></span>Advisor success customer launch party.</li>
                        <li><span className='me-2'><FaCheckCircle /></span>Business-to-consumer long tail.</li>
                    </ul>
                    <Button title="Start Now" bg="#0A2640" color="white" />
                </div>
            </div>
            <div className='d-flex align-items-center gap-5 py-5'>
                <div className='w-100'>
                    <h3 className='w-75'>We connect our customers with the best, and help them keep up-and stay open.</h3>
                    <ul className='p-0 mt-4 w-75'>
                        <li className={styles.active}><span className='me-2'><FaFeather /></span> We connect our customers with the best.</li>
                        <li><span className='me-2'><RxEyeOpen /></span>Advisor success customer launch party.</li>
                        <li><span className='me-2'><RxSun /></span>Business-to-consumer long tail.</li>
                    </ul>
                </div>
                <div className={styles.image} style={{ position: 'relative' }}>
                    <img src={image3} alt="" />
                    <img src={image4} alt="" style={floatImage2} />
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceSection
