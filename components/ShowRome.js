import styles from '../styles/ShowRome.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const ShowRome = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className='text-center pt-4 display-5'>Showroom</h2>
      <p className='text-center text-muted'>Build Your Dream Vehicle</p>
      <div className={styles.flexSystem}>
        <div className={styles.carTypes}>
          <div>CARS</div>
          <div>SUVS</div>
          <div>TRUCKS</div>
          <div>VANS</div>
        </div>
        <div className={`${styles.line} bg-secondary`}></div>
        <div className={styles.carDetails}>
          <div className='text-center'>
            <div>
              <Image src='/accord.png' width={207} height={155} />
              <div>
                <h3 className='text-center '>2022 Accord</h3>
                <h5 className='text-center pb-2'>$33,320.00*</h5>
                <div className='d-flex flex-row border-top border-secondary ms-1'>
                  <div className='border-end border-secondary p-2 text-start'>
                    <h5>Finance</h5>
                    <div>$344/bi-weekly</div>
                    <div>48 Month Term</div>
                    <div>3.49% Interest Rate</div>
                  </div>
                  <div className='p-2 text-start'>
                    <h5>Lease</h5>
                    <div>$255/bi-weekly</div>
                    <div>36 Month Term</div>
                    <div>3.99% Interest Rate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='text-center'>
            <div>
              <Image src='/accord.png' width={207} height={155} />
              <div>
                <h3 className='text-center '>2022 Accord</h3>
                <h5 className='text-center pb-2'>$33,320.00*</h5>
                <div className='d-flex flex-row border-top border-secondary ms-1'>
                  <div className='border-end border-secondary p-2 text-start'>
                    <h5>Finance</h5>
                    <div>$344/bi-weekly</div>
                    <div>48 Month Term</div>
                    <div>3.49% Interest Rate</div>
                  </div>
                  <div className='p-2 text-start'>
                    <h5>Lease</h5>
                    <div>$255/bi-weekly</div>
                    <div>36 Month Term</div>
                    <div>3.99% Interest Rate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='text-center'>
            <div>
              <Image src='/accord.png' width={207} height={155} />
              <div>
                <h3 className='text-center '>2022 Accord</h3>
                <h5 className='text-center pb-2'>$33,320.00*</h5>
                <div className='d-flex flex-row border-top border-secondary ms-1'>
                  <div className='border-end border-secondary p-2 text-start'>
                    <h5>Finance</h5>
                    <div>$344/bi-weekly</div>
                    <div>48 Month Term</div>
                    <div>3.49% Interest Rate</div>
                  </div>
                  <div className='p-2 text-start'>
                    <h5>Lease</h5>
                    <div>$255/bi-weekly</div>
                    <div>36 Month Term</div>
                    <div>3.99% Interest Rate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='text-center'>
            <div>
              <Image src='/accord.png' width={207} height={155} />
              <div>
                <h3 className='text-center '>2022 Accord</h3>
                <h5 className='text-center pb-2'>$33,320.00*</h5>
                <div className='d-flex flex-row border-top border-secondary ms-1'>
                  <div className='border-end border-secondary p-2 text-start'>
                    <h5>Finance</h5>
                    <div>$344/bi-weekly</div>
                    <div>48 Month Term</div>
                    <div>3.49% Interest Rate</div>
                  </div>
                  <div className='p-2 text-start'>
                    <h5>Lease</h5>
                    <div>$255/bi-weekly</div>
                    <div>36 Month Term</div>
                    <div>3.99% Interest Rate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.Button}`}>VIEW ALL</div>

    </div> 
  )
}

export default ShowRome