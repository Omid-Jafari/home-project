import styles from '../styles/Footer.module.scss'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className='d-flex justify-content-between align-items-center px-5'>
                <div className={`${styles.Map}`}>
                    <h4 className='mb-3'>LOCATION</h4><br />
                    <img src='/Map.png' alt='map' />

                </div>
                <div className={`${styles.Map}`}>
                    <h4>CONTACT US</h4><br />
                    <h5><BsFillTelephoneFill /> &nbsp;&nbsp;(604) 500-3131</h5><br />
                    <h5><MdLocationOn /> &nbsp;&nbsp;12826 King George Hwy Surrey British<br /><br /> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Columbia V3T 259</h5>
                </div>
                <div className={`${styles.Map}`}>
                    <h4>HOURS OF OPERATION</h4><br />
                    <div className='d-flex flex-row justify-content-between'>
                        <div>
                            <div>MONDAY</div>
                            <div>TUESDAY</div>
                            <div>WEDNESDAY</div>
                            <div>THURSDAY</div>
                            <div>FRIDAY</div>
                            <div>SATERDAY</div>
                            <div>SUNDAY</div>
                        </div>
                        <div>
                            <div>10:00AM-7:00PM</div>
                            <div>10:00AM-7:00PM</div>
                            <div>10:00AM-7:00PM</div>
                            <div>10:00AM-7:00PM</div>
                            <div>10:00AM-7:00PM</div>
                            <div>10:00AM-7:00PM</div>
                            <div>11:00AM-5:00PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between border-top border-bottom border-white mx-auto py-3' style={{width:'1264px', marginTop:'41px'}}>
                <div>HOME</div>
                <div>SHOWROOM</div>
                <div>FINANCING</div>
                <div>DEALERSHIP</div>
                <div>CONTACT US</div>
                <div>TEXT US NOW</div>
            </div>
            <div className='d-flex flex-direction justify-content-between my-4 mx-5'>
                <div><BiCopyright />2022 LexaAuto</div>
                <div>Privacy And Policy</div>
                <div>Powered By<img src='/LogoH.png' />HillzDealer</div>
            </div>
        </div>
    )
}

export default Footer