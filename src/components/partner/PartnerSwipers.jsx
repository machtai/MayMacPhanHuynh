
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './PartnerSwiperCSS.css';
import SwiperCore from 'swiper/core';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/freeship.png';
import img3 from '../../assets/logo.png';
import img4 from '../../assets/R.png';
SwiperCore.use([EffectCoverflow, Pagination]);

export default function PartnerSwiper() {

  return (
    <>
    <h4 className="text-textStrongColor font-bold sm:text-3xl text-xl sm:mt-5 sm:mb-2 sm:mx-5 mt-2 mb-1 mx-2 text-center max-w-full justify-center">Các đối tác đã và đang hợp tác cùng Phan Huỳnh</h4>
    <div className="border-t border-blue-700 sm:mb-4 mb-2 mx-auto w-[20vh] justify-center text-center "></div>
     
      <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
     
      loop="true"
      autoplay="true"
        effect={'coverflow'}
        grabCursor="true"
        centeredSlides="true"
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows:"true"
          
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
      >
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px]  max-w-[200px] max-h-[200px]">
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src={img2}/>
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src={img4}/>
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className="custom-slide md:max-w-[300px] md:max-h-[300px] max-w-[200px] max-h-[200px]">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
