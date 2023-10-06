import React from 'react'

export default function Footer() {
  return (
  
<div className=" bg-gray-900">
<div className="max-w-2xl mx-auto text-white sm:py-8 py-4">
    <div className="text-center">
        <p className="sm:text-3xl text-xl mb-1"> Download our fitness app </p>
        <p className='sm:text-base text-xs'> Stay fit. All day, every day. </p>
        <div className="flex justify-center sm:mt-4 mt-2">
            <div className="flex items-center border w-auto rounded-lg px-4 sm:py-2 py-0 w-52 mx-2">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7  md:w-8"/>
                <div className="text-left ml-3">
                    <p className='text-xs text-gray-200'>Contact us </p>
                    <p className="text-sm md:text-base"> Facebook </p>
                </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-1 mx-2">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className=" w-7 md:w-8"/>
                <div className="text-left ml-3">
                    <p className='text-xs text-gray-200'>Contact us </p>
                    <p className="text-sm md:text-base"> Telephone </p>
                </div>
            </div>
        </div>
    </div>
    <div className="md:mt-10 mt-3 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <p className="order-2 md:order-1 mt-2 md:mt-0 sm:text-base text-xs"> &copy; Beautiful Footer, 2021. </p>
        <div className="order-1 md:order-2 sm:text-base text-xs">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
        </div>
    </div>
</div>
</div>
  )
}
