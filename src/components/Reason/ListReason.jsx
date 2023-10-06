import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reason from '../../assets/reason.png';
import reason2 from '../../assets/reason2.png';
import reason3 from '../../assets/reason3.png';
import reason4 from '../../assets/reason4.png';

export default function Reason() {
  const settings = {
    dots: "true",
    infinite: "true",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: "true",
  };

  return (
    <div className="container mx-auto relative sm:py-8 py-4 sm:mb-10">
    <h4 className="text-textStrongColor font-bold sm:text-3xl text-xl sm:mt-5 sm:mb-2 sm:mx-5 mt-2 mb-1 mx-2 text-center max-w-full justify-center">Lý do nên chọn chúng tôi</h4>
    <div className="border-t border-blue-700 sm:mb-4 mb-2 mx-auto w-[20vh] justify-center text-center "></div>
      <Slider {...settings} autoplaySpeed={2500} autoplay="true">
      <div className="text-center mx-auto max-w-xsflex flex-col justify-center items-center relative"> 
      <div className="person sm:mb-4">
        <img
          src={reason}
          alt=""
          className="mx-auto mb-2 sm:w-[50px] w-8 sm:h-[50px] h-8 bg-blue-gray-200 rounded-full"
        />
        <strong>Làm Việc Có Chữ Tín</strong>
      </div>
      <p className="text-gray-700 mb-4 sm:text-base text-sm relative z-10">
        Chúng tôi tin rằng công thức làm nên thành công của là xây dựng dựa trên những sản phẩm chất lượng
      </p>
      <i className='bx bxs-quote-alt-left text-3xl text-blue-700 relative z-10'></i>
    </div>
        
        
        {/* Lý do thứ 2 */}
        <div className="text-center mx-auto max-w-xsflex">
          <div className="person mb-4">
            <img
              src={reason2}
              alt="Lý do thứ 2"
              className="mx-auto mb-2 sm:w-[50px] w-8 sm:h-[50px] h-8 bg-blue-gray-200 rounded-full"
            />
            <strong>Lý do thứ 2</strong>
          </div>
          <p className="text-gray-700 mb-4 sm:text-base text-sm">
            Nội dung lý do thứ 2
          </p>
          <i className='bx bxs-quote-alt-left text-3xl text-blue-700'></i>
        </div>
        
        {/* Lý do thứ 3 */}
        <div className="text-center mx-auto max-w-xsflex">
          <div className="person mb-4">
            <img
              src={reason3}
              alt="Lý do thứ 3"
              className="mx-auto mb-2 sm:w-[50px] w-8 sm:h-[50px] h-8 bg-blue-gray-200 rounded-full"
            />
            <strong>Lý do thứ 3</strong>
          </div>
          <p className="text-gray-700 mb-4 sm:text-base text-sm">
            Nội dung lý do thứ 3
          </p>
          <i className='bx bxs-quote-alt-left text-3xl text-blue-700'></i>
        </div>
        
        {/* Lý do thứ 4 */}
        <div className="text-center mx-auto max-w-xsflex">
          <div className="person mb-4">
            <img
              src={reason4}
              alt="Lý do thứ 4"
              className="mx-auto mb-2 sm:w-[50px] w-8 sm:h-[50px] h-8 bg-blue-gray-200 rounded-full"
            />
            <strong>Lý do thứ 4</strong>
          </div>
          <p className="text-gray-700 mb-4 sm:text-base text-sm">
            Nội dung lý do thứ 4
          </p>
          <i className='bx bxs-quote-alt-left text-3xl text-blue-700'></i>
        </div>
        
        {/* Lý do thứ 5 */}
        <div className="text-center mx-auto max-w-xsflex">
          <div className="person mb-4">
            <img
              src={reason}
              alt="Lý do thứ 5"
              className="mx-auto mb-2 sm:w-[50px] w-8 sm:h-[50px] h-8 bg-blue-gray-200 rounded-full"
            />
            <strong>Lý do thứ 5</strong>
          </div>
          <p className="text-gray-700 mb-4 sm:text-base text-sm">
            Nội dung lý do thứ 5
          </p>
          <i className='bx bxs-quote-alt-left text-3xl text-blue-700'></i>
        </div>
      </Slider>
    </div>
    
  )
}
