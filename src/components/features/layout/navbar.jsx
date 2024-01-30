import React from 'react';
import Button from '../../ui/button';

const Navbar = () => {
  return (
    <div className='h-[164px] px-[163px] py-[50px] text-white bg-indigo-300 border-b border-black'>
      <div className='flex items-center justify-between border border-black'>
        <div className='flex items-center'>
          <div className='flex mr-[100px] text-[32px] font-alice'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/navbar/coffeeCup.png`}
              alt='img'
            />{' '}
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
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
