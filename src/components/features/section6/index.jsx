import React from 'react';
import Button from '../../ui/button';

const Gallery = () => {
  return (
    <div className='flex flex-col gap-[60px] sm:px-4 lg:px-[150px] 2xl:px-[163px] py-[150px]'>
      <div className='flex justify-center font-alice text-[50px] text-[#1A1A1A]'>
        Coffee Shop Gallery
      </div>
      <div className='md:ml- xl:w-[1595px] xl:h-[788px] xl:flex'>
        <div className='sm:hidden xl:block w-[192px] h-[785px] bg-[#F9E8B3] border-[1px] border-[#1A1A1A]'></div>
        <div>
          <div className='flex'>
            <div className='size-[386px] border-[1px] border-[#1A1A1A]'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/section6/coffeeGallery1.png`}
                alt='img'
                className='size-[386px] object-cover'
              />
            </div>
            <div className='w-[214px] h-[386px] bg-[#F3F0D9] border-[1px] border-[#1A1A1A]'></div>
          </div>
          <div className='w-[600px] h-[399px] '>
            <img
              src={`${process.env.PUBLIC_URL}/assets/section6/coffeeGallery2.png`}
              alt='img'
              className='w-[600px] h-[399px] object-cover border-[1px] border-[#1A1A1A]'
            />
          </div>
        </div>
        <div className=''>
          <div className=''>
            <img
              src={`${process.env.PUBLIC_URL}/assets/section6/coffeeGallery3.png`}
              alt='img'
              className='size-[600px] object-cover border-[1px] border-[#1A1A1A]'
            />
          </div>
          <div className='border-[1px] border-[#1A1A1A] w-[600px] h-[185px]'></div>
        </div>
        <div className='sm:hidden xl:block'>
          <div className=' size-[206px]'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/section6/coffeeGallery4.png`}
              alt='img'
              className='size-[206px] object-cover border-[1px] border-[#1A1A1A] '
            />
          </div>
          <div className='border-[1px] border-[#1A1A1A] sm:w-[394px] xl:w-[206px] xl:h-[579px] bg-[#F9E8B3]'></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button
          className='bg-[#F5D577] shadow-md shadow-[#F5D577] h-[63px] text-black'
          buttonText='view more'
          imageSrc='hero/iconArrowRight.png'
        />
      </div>
    </div>
  );
};

export default Gallery;
