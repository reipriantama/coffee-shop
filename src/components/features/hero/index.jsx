import React, { useState } from 'react';

const Hero = () => {
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
    <div>
      <div className='flex '>
        {boxData &&
          boxData.map((item, data) => (
            <div
              key={data}
              className='flex border-r-[1px] border-black bg-[#F5D577] px-[50px] py-[80px]'
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
