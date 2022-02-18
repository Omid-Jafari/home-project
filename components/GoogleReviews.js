import styles from '../styles/GoogleReviews.module.scss'

const GoogleReviews = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className='text-center pt-4'>Google Reviews</h2>
        <p className='text-center'>We are committed to making you a long-lasting customer and friend</p>
        <div className='d-flex justify-content-around align-items-center flex-row'>
            <div className={`${styles.reviews}`}>
                <div style={{backgroundColor:"black", height: "39px"}} className='d-flex flex-row justify-content-between align-items-center px-3'>
                    <div>Marvin Phan</div>
                    <div className='d-flex flex-row'>
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                    </div>
                </div>
                <div>
                    After much searching at other dealer we found a beautiful SUV at cristal 2000 auti.The test drive revealed a very good driving vehicle, but fadi made it even better for us.He hade for us.He had the car certified, replaced worn components and even took...<br /> <br /><br />December 28,2022                   
                </div><br />
                <div className='text-warning'><u>READ MORE AT GOOGLE</u></div>
            </div>
            <div className={`${styles.reviews}`}>
                <div style={{backgroundColor:"black", height: "39px"}} className='d-flex flex-row justify-content-between align-items-center px-3'>
                    <div>Marvin Phan</div>
                    <div className='d-flex flex-row'>
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                        <img  className='px-1' src='/star.png' alt='star' />
                    </div>
                </div>
                <div>
                    After much searching at other dealer we found a beautiful SUV at cristal 2000 auti.The test drive revealed a very good driving vehicle, but fadi made it even better for us.He hade for us.He had the car certified, replaced worn components and even took...<br /> <br /><br />December 28,2022                   
                </div><br />
                <div className='text-warning'><u>READ MORE AT GOOGLE</u></div>
            </div>
        </div>
    </div>
  )
}

export default GoogleReviews