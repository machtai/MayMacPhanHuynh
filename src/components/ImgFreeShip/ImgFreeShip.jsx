import React from 'react'
import imgFS from '../../assets/freeship.png'
export default function ImgFreeShip() {
  return (
    <div>
    <h4 className="text-textStrongColor font-bold sm:text-3xl text-xl sm:mt-5 sm:mb-2 sm:mx-5 mt-2 mb-1 mx-2 text-center max-w-full justify-center">Dịch vụ giao hàng</h4>
    <div className="border-t border-blue-700 sm:mb-4 mb-2 mx-auto w-[20vh] justify-center text-center "></div>
    
      <img className='h-auto max-w-full  mx-auto' src={imgFS} alt="ImgFreeShip"/>
    </div>
  )
}
