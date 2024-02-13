import React from 'react';
import Button from '../../ui/button';

const News = () => {
  const newsData = [
    {
      image: '',
      title: 'The Perfect Brew: Discovering the Art of Coffee at Gedion Coffee',
      author: 'Lindsey Aminoff',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nib at neque',
    },
    {
      image: '',
      title:
        'From Bean to Cup: Sourcing and Roasting Excellence at Gedion Coffee',
      author: 'Kierra Carder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nib at neque',
    },
    {
      image: '',
      title:
        'A Welcoming Haven: Creating a Warm and Inviting Atmosphere at Gedion Coffee',
      author: 'Cheyenne Philips',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nib at neque',
    },
  ];

  return (
    <div className='text-white bg-black py-[150px] xl:px-[163px] gap-[30px] flex flex-col'>
      <div className='flex justify-center tracking-[1px] font-alice text-[50px]'>
        Read Our Latest News
      </div>
      <div className='sm:flex sm:flex-col sm:items-center xl:flex xl:flex-row gap-[30px]'>
        {newsData.map((item, index) => (
          <div className='w-[511px]' key={index}>
            <div className='border-[1px] border-white w-[511px] h-[334px]'>
              {item.image}
            </div>
            <div className='flex flex-col gap-[10px] p-5'>
              <div className='font-alice text-[30px]'>{item.title}</div>
              <div className='italic font-merriweather text-[15px] text-[#BBBBBB]'>
                by {item.author} / Compettion / 23.11.2023
              </div>
              <div className='text-[20px] text-[#666666]'>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <Button
          className='border-[1px] border-white bg-[#F5D577] shadow-md shadow-[#F5D577] h-[63px] text-black'
          buttonText='view more'
          imageSrc='hero/iconArrowRight.png'
        />
      </div>
    </div>
  );
};

export default News;
