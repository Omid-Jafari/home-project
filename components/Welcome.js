import styles from '../styles/Welcome.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <img className='img-fluid' src='/royce.png' alt='Royce Pic' />
      <div>
        <div>
          <h2>Welcome to Lexa Auto Sales Ltd</h2><br />
          <p>
            Welcome to Lexa Auto Sales Ltd,Your North Vancover dealer.<br /><br />Our clients have high expectation for their vehicles, and equally high expextations about the dealership professionals who save them.Lexa Auto Sales Ltd is widley recognized to be among the best in quality, relatibility, value and customer satisfaction in both sales and service.<br /><br />When your ready, come on by for a test drive...
          </p><br />
          <div>READ MORE</div>
        </div>
      </div>
    </div>

  )
}

export default Welcome