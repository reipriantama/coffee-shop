import React from 'react';
import Button from '../../ui/button';

const Contact = () => {
  return (
    <div className='bg-[#F5D577] sm:p-10 xl:px-[150px] xl:py-[163px] xl:flex'>
      <div className='justify-center md:flex'>
        <img
          className='w-[606px] h-[543px] object-cover border-[1px] border-[#1A1A1A]'
          src={`${process.env.PUBLIC_URL}/assets/section5/coffeeDealer.png`}
          alt='img'
        />
      </div>
      <div className='w-[782px] sm:flex sm:flex-col md:ml-[150px] xl:flex xl:flex-col xl:ml-[153px] gap-[40px] py-[89px] text-[#1A1A1A]'>
        <div className='font-alice text-[50px]'>
          Become Our Dealer <br /> and Distributor
        </div>
        <div className='sm:text-justify sm:w-[550px] xl:w-full text-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim dolor sit amet, consectetur
          adipiscing elit aliquam purus sit amet luctus venenatis
        </div>
        <Button
          className='bg-white shadow-md shadow-[#F5D577] h-[63px] text-black'
          buttonText='contact us'
          imageSrc='hero/iconArrowRight.png'
        />
      </div>
    </div>
  );
};

export default Contact;
