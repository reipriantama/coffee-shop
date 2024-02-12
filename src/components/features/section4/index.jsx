import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.css';

const Varieties = () => {
  const varietiesData = [
    {
      image: 'assets/section4/coffeeArabica.png',
      title: 'Arabica',
      rating: 5,
      description:
        'Considered the most popular and widely consumed coffee variety.',
    },
    {
      image: 'assets/section4/coffeeRobusta.png',
      title: 'Robusta',
      rating: 5,
      description: 'Known for its high caffeine content and strong flavor.',
    },
    {
      image: 'assets/section4/coffeeColombia.png',
      title: 'Colombian',
      rating: 1,
      description:
        'Grown in the mountainous regions of Colombia, this coffee is known for...',
    },
    {
      image: 'assets/section4/coffeeEthiopian.png',
      title: 'Ethiopian',
      rating: 4,
      description:
        'Originating from Ethiopia, this coffee has a diverse range of flavors...',
    },
    {
      image: 'assets/section4/coffeeBurbon.png',
      title: 'Bourbon',
      rating: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'assets/section4/coffeeCatimor.png',
      title: 'Catimor',
      rating: 2,
      description:
        'expedita, nam error, sint voluptatum atque veniam voluptatem amet',
    },
  ];
  return (
    <div>
      <div className='px-[163px] mb-[88.5px]'>
        <div className='flex justify-center font-alice text-[50px] mb-[60px] text-center'>
          Coffee Varieties: From Classics <br /> to Exotics
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {varietiesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex gap-[30px]'>
                <div>
                  <div className='border-[25px] border-[#F3F0D9] size-[375px]'>
                    <img
                      src={`${process.env.PUBLIC_URL}${item.image}`}
                      alt='img'
                      className='size-[325px] object-cover'
                    />
                  </div>
                  <div className='flex flex-col p-[20px] gap-5 w-[375px]'>
                    <div className='font-alice text-[30px] text-[#1A1A1A]'>
                      {item.title}{' '}
                      <div className='flex'>
                        {[...Array(item.rating)].map((rate, index) => (
                          <IoIosStar
                            className='size-[24px] text-[#F6A831]'
                            key={`rate-${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className='text-[20px] text-[#656462]'>
                      {item.description}
                    </div>
                    <div className='uppercase text-[20px] text-[#1A1A1A] underline tracking-[2.4px]'>
                      detail more
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

export default Varieties;
