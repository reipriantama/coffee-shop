import React from 'react';

const Button = ({ className, buttonText, imageSrc }) => {
  return (
    <div>
      <button
        className={`flex gap-[10px] px-[40px] items-center uppercase border border-black rounded-full sm:text-sm md:text-base 2xl:text-[20px] tracking-[2.4px] ${className}`}
      >
        <div>{buttonText}</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${imageSrc}`}
          alt='img'
          className=''
        />
      </button>
    </div>
  );
};

export default Button;
