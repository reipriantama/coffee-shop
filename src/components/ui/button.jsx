import React from 'react';

const Button = () => {
  return (
    <div>
      <button className='flex gap-1 px-10 py-5 uppercase border rounded-3xl bg-[#F5D577]'>
        <div>this is button</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/navbar/cartIcon.png`}
          alt=''
          className='size-6'
        />
      </button>
    </div>
  );
};

export default Button;
