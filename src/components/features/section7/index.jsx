import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Experience = () => {
  const reviewData = [
    {
      image: '',
      title: 'Coffee the best in the world',
      description: `"Agorapulse has really changed our ability to follow up with customers and make sure we're being responsive and interacting with them when they want."`,
      name: 'Caroline Philips',
      rating: 4,
    },
    {
      image: '',
      title: 'Lorem Ipsum',
      description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum, ullam placeat molestiae labore, assumenda et vel voluptate inventore distinctio beatae adipisci. Rem optio velit eveniet, magni id harum pariatur!"`,
      name: 'Philips',
      rating: 5,
    },
    {
      image: '',
      title: 'This is title',
      description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum, ullam placeat molestiae labore, assumenda et vel voluptate inventore distinctio beatae adipisci. Rem optio velit eveniet, magni id harum pariatur!"`,
      name: 'Nathan',
      rating: 2,
    },
    {
      image: '',
      title: 'dolor sit amet consectetur',
      description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum, ullam placeat molestiae labore, assumenda et vel voluptate inventore distinctio beatae adipisci. Rem optio velit eveniet, magni id harum pariatur!"`,
      name: 'Caroline',
      rating: 3,
    },
  ];

  return (
    <div className='flex flex-col gap-[60px] px-[163px] pb-[150px]'>
      <div className='font-alice text-[50px]'>
        The Coffee Experience <br /> Customer
      </div>
      <div className='flex gap-[30px]'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {reviewData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex border-[1px] border-[#1A1A1A] w-[924px]'>
                <div className=''>{item.image}</div>
                <div className='flex flex-col p-[30px] bg-[#F4F0E4] text-[#1A1A1A]'>
                  <div className='flex flex-col gap-[20px]'>
                    <div className='font-alice text-[30px]'>{item.title}</div>
                    <div className='text-[20px]'>{item.description}</div>
                    <div className='uppercase text-[17px] tracking-widest'>
                      by google review
                    </div>
                  </div>
                  <div className='mt-[60px]'>
                    <div className='text-[20px] font-bold'>{item.name}</div>
                    <div className='flex'>
                      {[...Array(item.rating)].map((rate, index) => (
                        <IoIosStar
                          className='text-[#F6A831] size-6'
                          key={`rate-${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;