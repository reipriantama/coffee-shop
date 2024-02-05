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
    <div className='text-white bg-black text-[20px] mt-[-1px]'>
      <div className='flex px-[163px] pt-[50px] mb-[100px] '>
        <div className='flex items-start '>
          <div className='flex flex-col gap-[30px] w-[332px] mr-[77px]'>
            <div className='flex text-[32px] font-alice'>
              {' '}
              <img
                src={`${process.env.PUBLIC_URL}/assets/footer/iconCup.png`}
                alt='img'
              />
              Gedion Coffee
            </div>
            <div className='text-[#BBBBBB]'>
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
          <div className='flex gap-[177px]'>
            <div>
              <div className='text-[30px] font-alice'>Explore</div>
              <div className='flex gap-[20px] mt-[30px]'>
                <div className='flex flex-col gap-[15px] text-[#BBBBBB]'>
                  <p>Home</p>
                  <p>Features</p>
                  <p>Shop Now</p>
                </div>
                <div className='flex flex-col gap-[15px] text-[#BBBBBB]'>
                  <p>About Us</p>
                  <p>Our Menu</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
            <div>
              <div className='text-[30px] font-alice'>Opening Hours</div>
              <div className='flex gap-[40px] mt-[30px] text-[#BBBBBB]'>
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
            <div>
              <div className='text-[30px] font-alice'>Contact Us</div>
              {contactUsData &&
                contactUsData.map((item, data) => (
                  <div
                    key={data}
                    className='flex flex-col gap-[20px] mt-[30px] text-[#BBBBBB]'
                  >
                    <span className='flex flex-row gap-[15px]'>
                      <img src={item.image} alt='img' /> {item.description}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center grid content-center h-[129px]'>
        © 2023 Coffee Shop. All Rights Reserved. With love by Elmous
      </div>
    </div>
  );
};

export default Footer;
