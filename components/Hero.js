import styles from '../styles/Hero.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <img className='img-fluid' src='/lambo.png' alt='lambo' />
      <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)'/>
    </div>
  )
}

export default Hero