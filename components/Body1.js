import React from 'react'
import styles from '../styles/Body1.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'



const Body1 = () => {
    return (
        <div className={styles.wrapper}>
            <div className='container align-items-center p-4'>
                <div className="d-flex flex-row justify-content-between bg-white mt-5 align-items-center">
                    <div className="p-2 ps-4">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className={styles.search}><BiSearch size={55} /></div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className="row">
                            <div className="col bg-warning m-2 p-2">Column</div>
                            <div className="col bg-warning m-2 p-2">Column</div>
                            <div className="w-100"></div>
                            <div className="col bg-warning m-2 p-2">Column</div>
                            <div className="col bg-warning m-2 p-2">Column</div>
                        </div>
                    </div>
                    <div className='col text-center'>
                        <div className='text-white text-nowrap'>Tomorrows Hours&nbsp; &nbsp; Sales:10:00AM-7:00pm&nbsp; &nbsp; Service & Parts: 11:00am-5:00pm</div>
                        <div className={styles.button}>VIEW HOURS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1