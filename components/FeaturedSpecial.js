import styles from '../styles/FeaturedSpecial.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const featuredSpecial = () => {
  return (
    <div className={`${styles.wrapper} text-center`}>
        <h1>Featured Specials</h1>
        <p>New And Popular Items At Competitive Prices</p>
        <div className='d-flex justify-content-between align-items-center flex-row text-white'>
            <div>
              <img className='pt-3' src='/maserati.png' alt='maserati' />
              <div className='p-3'>
                <h3 className='text-start'>2016 Honda</h3>
                <div className='d-flex flex-row justify-content-between border-bottom border-secondary mb-2'>
                  <div>Civic EX-T</div>
                  <div className='border-start border-secondary'></div>
                  <div>$20,998</div>
                </div>
              <div className={`${styles.Button} d-flex justify-content-center align-items-center bg-white text-dark`}>READ MORE</div>
              </div>
            </div>
            <div>
              <img className='pt-3' src='/maserati.png' alt='maserati' />
              <div className='p-3'>
                <h3 className='text-start'>2016 Honda</h3>
                <div className='d-flex flex-row justify-content-between border-bottom border-secondary mb-2'>
                  <div>Civic EX-T</div>
                  <div className='border-start border-secondary'></div>
                  <div>$20,998</div>
                </div>
              <div className={`${styles.Button} d-flex justify-content-center align-items-center bg-white text-dark`}>READ MORE</div>
              </div>
            </div>
            <div>
              <img className='pt-3' src='/maserati.png' alt='maserati' />
              <div className='p-3'>
                <h3 className='text-start'>2016 Honda</h3>
                <div className='d-flex flex-row justify-content-between border-bottom border-secondary mb-2'>
                  <div>Civic EX-T</div>
                  <div className='border-start border-secondary'></div>
                  <div>$20,998</div>
                </div>
              <div className={`${styles.Button} d-flex justify-content-center align-items-center bg-white text-dark`}>READ MORE</div>
              </div>
            </div>
            <div>
              <img className='pt-3' src='/maserati.png' alt='maserati' />
              <div className='p-3'>
                <h3 className='text-start'>2016 Honda</h3>
                <div className='d-flex flex-row justify-content-between border-bottom border-secondary mb-2'>
                  <div>Civic EX-T</div>
                  <div className='border-start border-secondary'></div>
                  <div>$20,998</div>
                </div>
              <div className={`${styles.Button} d-flex justify-content-center align-items-center bg-white text-dark`}>READ MORE</div>
              </div>
            </div>
        </div>
        <div className={styles.viewAllButton}>VIEW ALL</div>
    </div>
  )
}

export default featuredSpecial