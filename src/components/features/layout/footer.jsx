import React, { useState } from 'react';

const Footer = () => {
  const [contactUsData] = useState([
    {
      image: `${process.env.PUBLIC_URL}assets/footer/iconLocation.png`,
      description: '44 Donre, Jakarta, IDN, 70-102',
    },
    {
      image: `${process.env.PUBLIC_URL}assets/footer/iconPhone.png`,
      description: '+62 - 92832384623',
    },
    {
      image: `${process.env.PUBLIC_URL}assets/footer/iconMail.png`,
      description: 'coffeeday@gmail.com',
    },
  ]);

  const dayData = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  
  return (
    <div className='text-white bg-black'>
      <div className='flex px-40 pt-12 pb-24 '>
        <div className='flex items-start gap-20'>
          <div className='flex flex-col gap-[30px] w-[332px]'>
            <div>Gedion Coffee</div>
            <div>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi
            </div>
            <div className='flex gap-[10px]'>
              <img
                src={`${process.env.PUBLIC_URL}assets/footer/iconInstagram.png`}
                alt='img'
              />
              <img
                src={`${process.env.PUBLIC_URL}assets/footer/iconTwitter.png`}
                alt='img'
              />
              <img
                src={`${process.env.PUBLIC_URL}assets/footer/iconFacebook.png`}
                alt='img'
              />
            </div>
          </div>
          <div>
            Explore
            <div className='flex gap-[20px] mt-[30px]'>
              <div className='flex flex-col gap-[15px]'>
                <span>Home</span>
                <span>Features</span>
                <span>Shop Now</span>
              </div>
              <div className='flex flex-col gap-[15px]'>
                <span>About Us</span>
                <span>Our Menu</span>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
          <div className=''>
            Opening Hours
            <div className='flex gap-[20px] mt-[30px]'>
              <div className='flex flex-col gap-[15px]'>
                {dayData.map((day, data) => (
                  <span key={data}>{day}</span>
                ))}
              </div>
              <div className='flex flex-col gap-[15px]'>
                {Array(7)
                  .fill('10:00 - 01:00')
                  .map((time, index) => (
                    <span key={index}>{time}</span>
                  ))}
              </div>
            </div>
          </div>
          <div className=''>
            Contact Us
            {contactUsData &&
              contactUsData.map((item, data) => (
                <div key={data} className='flex flex-col gap-[20px] mt-[30px]'>
                  <span className='flex flex-row gap-[15px]'>
                    <img src={item.image} alt='img' /> {item.description}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        © 2023 Coffee Shop. All Rights Reserved. With love by Elmous
      </div>
    </div>
  );
};

export default Footer;
