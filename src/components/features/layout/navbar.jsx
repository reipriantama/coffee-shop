import React from 'react';
import Button from '../../ui/button';

const Navbar = () => {
  return (
    <div className='h-[164px] w-full sm:px-4 2xl:px-[163px] py-[50px] text-white bg-transparent border-b border-white fixed z-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex mr-[100px] text-[32px] font-alice'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/navbar/coffeeCup.png`}
              alt='img'
              className='size'
            />
            Gedion Coffee
          </div>
          <div className='flex gap-[50px] uppercase'>
            <div>home</div>
            <div>about</div>
            <div>shop</div>
            <div>menu</div>
            <div>contact</div>
          </div>
        </div>
        <div className='flex gap-[15px]'>
          <Button
            className='border-white h-[64px]'
            buttonText='SHOP NOW'
            imageSrc='navbar/cartIcon.png'
          />
          <Button
            className='text-black bg-[#F5D577] h-[64px]'
            buttonText='Sign in'
            imageSrc='navbar/iconSignIn.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
