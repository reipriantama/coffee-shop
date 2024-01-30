import React from "react";

const Button = ({ className, buttonText, imageSrc }) => {
  return (
    <div>
      <button
        className={`flex gap-1 px-10 py-5 uppercase border rounded-3xl ${className}`}
      >
        <div>{buttonText}</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/navbar/${imageSrc}`}
          alt="img"
          className="size-6"
        />
      </button>
    </div>
  );
};

export default Button;
