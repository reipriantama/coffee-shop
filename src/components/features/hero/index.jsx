import React, { useState } from 'react';
import Button from '../../ui/button';
import Navbar from '../layout/navbar';

const Hero = () => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/hero/coffeeShopBg.png`;

  const [boxData] = useState([
    {
      image: `${process.env.PUBLIC_URL}/assets/hero/iconPointer.png`,
      title: 'Fast, Simple & Clean',
      description:
        'Prepare easily in minutes. No mess, no machines, no burning or bitterness.',
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/hero/iconCup.png`,
      title: 'Your Way, Every Time',
      description:
        'Great for hot & iced drinks. Makes coffees, lattes and so much more.',
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/hero/iconCoffeeMachine.png`,
      title: 'Great on the Go',
      description:
        'Enjoy at work or on a trip. TSA approved & designed for travel.',
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/hero/iconCupChat.png`,
      title: 'Enjoy moment',
      description:
        'Prepare easily in minutes. No mess, no machines, no burning or bitterness.',
    },
  ]);
  return (
    <div
      className='bg-bottom'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Navbar />
      <div className='flex flex-col justify-center items-center h-[970px] pt-[100px] relative'>
        <div className='flex flex-col items-center text-white w-[960px] gap-10 '>
          <div className='sm:text-[30px] lg:text-[72px] font-alice text-center'>
            Exceptional Coffee, Memorable Moments
          </div>
          <div className='sm:text-[15px] lg:text-[20px] text-center w-[618px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim{' '}
          </div>
          <div>
            <Button
              className='bg-[#F5D577] shadow-md shadow-[#F5D577] sm:h-[40px] 2xl:h-[63px] text-black'
              buttonText='shop now'
              imageSrc='hero/iconArrowRight.png'
            />
          </div>
          <div className='absolute text-white bottom-6 font-lato'>
            Scroll Down
            <div className='flex justify-center mt-[10px]'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/hero/arrowDown.png`}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid-cols-2 xl:flex sm:flex-none lg:grid'>
        {boxData &&
          boxData.map((item, data) => (
            <div
              key={data}
              className='flex border-r-[1px] border-black bg-[#F5D577] sm:p-7 xl:px-[50px] xl:py-[80px]'
            >
              <img
                className='size-[64px] mr-[30px]'
                src={item.image}
                alt='img'
              />
              <div className='flex flex-col'>
                <div className='font-bold mb-[29px]'>{item.title}</div>
                <div className=''>{item.description}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
