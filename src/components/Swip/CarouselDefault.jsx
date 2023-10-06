import React from 'react';
import { Carousel } from '@material-tailwind/react';
import img1 from '../../assets/1.jpg'

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl  overflow-hidden" autoplay={true} autoplayDelay={7000} loop={true}>
      <div className="flex items-center justify-center">
        <div className="w-full bg-cover bg-center sm:h-[70vh] h-[30vh]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')`}}></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-cover bg-center sm:h-[70vh] h-[30vh]" style={{backgroundImage: `url(${img1})`}}></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-cover bg-center sm:h-[70vh] h-[30vh]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')`}}></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-cover bg-center sm:h-[70vh] h-[30vh]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80')`}}></div>
      </div>
    </Carousel>
  );
}
