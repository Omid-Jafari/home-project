import styles from '../styles/Nav.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Select from 'react-select'
import { FaStaylinked, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: '#ffffff',
    backgroundColor: 'black',

  }),
  control: () => ({
    width: 200,
    height: 30,
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const Nav = () => {
  return (
    <div className='container-xl'>
      <div className={styles.nav}>

        <div className={styles.contact}>
          <ul>
            <li ><Image src='/logo.png' width={143} height={59} /></li>
            <li>
              <div>
                <span>
                  <BsFillTelephoneFill />
                  (604) 500-3131
                </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span>
                  <MdLocationOn />
                  12826King George Hwy Surrey Biritish Columbia V3T 259
                </span>&nbsp; &nbsp; &nbsp; &nbsp;
                <span>
                  <AiOutlineTwitter />
                </span>&nbsp; &nbsp;
                <span>
                  <FaTelegramPlane />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.navigate}>
          <div className='container'>
            <div className="row">
              <div className="col text-center pt-1 border-end border-white g-1">items</div>
              <div className="col text-center pt-1 border-end border-white g-1 m-0">
                <Select
                  styles={customStyles}
                  options={options}
                />
              </div>
              <div className="col text-center pt-1 border-end border-white g-1 m-0">
                <Select
                  styles={customStyles}
                  options={options}
                />
              </div>
              <div className="col text-center pt-1 border-end border-white g-1 m-0">
                <Select
                  styles={customStyles}
                  options={options}
                />
              </div>
              <div className="col text-center pt-1 border-end border-white g-1 m-0">
                <Select
                  styles={customStyles}
                  options={options}
                />
              </div>
              <div className="col text-center pt-1 g-1">items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav