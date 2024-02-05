import React from 'react';
import Button from '../../ui/button';

const Gallery = () => {
  return (
    <div className='flex flex-col gap-[60px] px-[163px] py-[150px]'>
      <div className='flex justify-center font-alice text-[50px] text-[#1A1A1A]'>
        Coffee Shop Gallery
      </div>
      <div className='w-[1595px] h-[788px] flex'>
        <div className='w-[192px] h-[785px] bg-[#F9E8B3] border-[1px] border-[#1A1A1A]'></div>
        <div>
          <div className='flex'>
            <div className='size-[386px] border-[1px] border-[#1A1A1A]'>
              photo
            </div>
            <div className='w-[214px] h-[386px] bg-[#F3F0D9] border-[1px] border-[#1A1A1A]'>
              bg
            </div>
          </div>
          <div className='w-[600px] h-[399px] border-[1px] border-[#1A1A1A]'>
            photo
          </div>
        </div>
        <div className=''>
          <div className='border-[1px] border-[#1A1A1A] size-[600px]'>img</div>
          <div className='border-[1px] border-[#1A1A1A] w-[600px] h-[185px]'>
            bg
          </div>
        </div>
        <div className=''>
          <div className='border-[1px] border-[#1A1A1A] size-[206px]'>
            image
          </div>
          <div className='border-[1px] border-[#1A1A1A] w-[206px] h-[579px] bg-[#F9E8B3]'>
            bg
          </div>
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
