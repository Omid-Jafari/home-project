import React from 'react'
import styles from '../styles/Body1.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { BsCurrencyDollar } from 'react-icons/bs'



const Body1 = () => {
    return (
        <div className={styles.wrapper}>
            <div className='container align-items-center '>
                <div className="d-flex flex-row justify-content-between bg-white mt-5 align-items-center ms-2">
                    <div className="p-2 ps-4">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className="p-2 ps-4 border-start border-1 border-secondary">items&nbsp;<IoMdArrowDropdown /></div>
                    <div className={styles.search}><BiSearch size={55} /></div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex flex-row py-4'>
                    <div className={`${styles.info} d-flex flex-wrap`}>
                        <div className='m-2 p-2'><b><BsFillCalculatorFill />&nbsp;&nbsp;PAYMENT CALCULATOR</b></div>
                        <div className='m-2 p-2'><b><MdLocationOn size={23}/>&nbsp;&nbsp;GET DIRECTIONS</b></div>
                        <div className='m-2 p-2'><b><BsFillChatRightTextFill />&nbsp;&nbsp;TEXT US NOW</b></div>
                        <div className='m-2 p-2'><b><BsCurrencyDollar size={23}/>&nbsp;&nbsp;APPLY FOR FINANCING</b></div>
                    </div>
                    <div className={`${styles.hours}`}>
                        <p className='text-nowrap py-2' style={{fontSize:14}}>Tommorows Hours: &nbsp; &nbsp;Sales:10:00AM-7:00PM &nbsp; &nbsp;Service and Parts: 11:00AM-5:00PM</p>
                        <div className={styles.viewButton}>VIEW HOURS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1