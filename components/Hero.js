import styles from '../styles/Hero.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, A11y]);



const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className='img-fluid' src='/lambo.png' alt='lambo' />
          <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src='/lambo.png' alt='lambo' />
          <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src='/lambo.png' alt='lambo' />
          <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src='/lambo.png' alt='lambo' />
          <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src='/lambo.png' alt='lambo' />
          <input type='text' placeholder='FIND YOUR CAR (YEAR MAKE MODEL)' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero