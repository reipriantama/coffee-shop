import React, { useState } from 'react';
import Button from '../../ui/button';
import { IoIosCloseCircleOutline, IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='xl:block xl:w-max-[1280px] h-[164px] w-full sm:px-4 2xl:px-[163px] py-[50px] text-white bg-transparent border-b border-white fixed z-10'>
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
          <div className='sm:hidden xl:flex gap-[50px] uppercase'>
            <div>home</div>
            <div>about</div>
            <div>shop</div>
            <div>menu</div>
            <div>contact</div>
          </div>
        </div>
        <IoMdMenu
          className='cursor-pointer xl:hidden size-10'
          onClick={toggleSidebar}
        />
        <div className='sm:hidden  xl:flex gap-[15px]'>
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
      {showSidebar && (
        <div className='fixed w-[300px] inset-y-0 right-0 z-20 text-black bg-[#F5D577]'>
          <div className='flex flex-col items-center justify-center h-full gap-5'>
            <div className='py-5 text-2xl font-semibold uppercase'>Menu</div>
            <div className='py-2'>Home</div>
            <div className='py-2'>About</div>
            <div className='py-2'>Shop</div>
            <div className='py-2'>Menu</div>
            <div className='py-2'>Contact</div>
            <Button
              className='flex justify-center border h-[64px] w-[250px]'
              buttonText='SHOP NOW'
              imageSrc='navbar/cartIcon.png'
            />
            <Button
              className='flex justify-center text-black bg-white h-[64px] w-[250px] '
              buttonText='Sign in'
              imageSrc='navbar/iconSignIn.png'
            />
          </div>

          <div
            className='absolute top-0 right-0 p-4 cursor-pointer'
            onClick={toggleSidebar}
          >
            <IoIosCloseCircleOutline className='size-10' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
