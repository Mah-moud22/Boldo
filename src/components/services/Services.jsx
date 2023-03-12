import React from 'react'
import styles from './services.module.css'
import ServiceCard from './ServiceCard'
import img1 from '../../assets/imgs/service1.png'
import img2 from '../../assets/imgs/service2.png'
import img3 from '../../assets/imgs/service3.png'
import img4 from '../../assets/imgs/serviceSection3.png'
import SectionHeader from '../shared/SectionHeader'
import SectionDescription from '../shared/SectionDescription'
import ServiceSection from './ServiceSection'
import Testimonials from './Testimonials'
import { FaChevronCircleDown } from 'react-icons/fa';
function Services() {
    return (
        <div id="services">
            <div className='container'>
                <SectionHeader title="our services" />
                <SectionDescription description="Handshake infographic mass market crowdfunding iteration." />
                <div className="d-flex justify-content-evenly my-5 text-start">
                    <ServiceCard image={img1} title="Cool feature title" desc="Learning curve network effects return on investment." />
                    <ServiceCard image={img2} title="Even cooler feature" desc="Learning curve network effects return on investment." />
                    <ServiceCard image={img3} title="Cool feature title" desc="Learning curve network effects return on investment." />
                </div>
                <ServiceSection />
            </div>
            <Testimonials />
            <div className={`container d-flex text-start gap-5 py-5 ${styles.service_section}`}>
                <div className='gap-5'>
                    <img src={img4} alt="" />
                    <div className='row d-flex mt-3'>
                        <h3 className='col'>We connect our customers with the best, and help them keep up-and stay open.</h3>
                        <ul className='col' id="accordion">
                            <li>
                                <div className="card border-0">
                                    <a className={`collapsed btn w-100 text-start ${styles.collapse_button}`} data-bs-toggle="collapse" href="#collapseOne">
                                        <span>We connect our customers with the best</span><FaChevronCircleDown />
                                    </a>
                                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum..
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="card border-0">
                                    <a className={`collapsed btn w-100 text-start ${styles.collapse_button}`} data-bs-toggle="collapse" href="#collapseTwo">
                                        <span>We connect our customers with the best</span><FaChevronCircleDown />
                                    </a>
                                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum..
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
