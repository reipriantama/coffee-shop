import React from 'react';

const Menu = () => {
  const menuData = [
    {
      imgSrc: 'image',
      title: 'Caffe Latte',
      description: 'Fresh brewed coffee and steamed milk',
      price: '2.95',
    },
    {
      imgSrc: '',
      title: 'Caffe Mocha',
      description: 'Espresso With Milk, and Whipped Cream',
      price: '3.56',
    },
    {
      imgSrc: '',
      title: 'White Chocolate Mocha',
      description: 'Espresso, White Chocolate, Milk, Ice and Cream',
      price: '2.30',
    },
    {
      imgSrc: '',
      title: 'Caffe Americano',
      description: 'Espresso Shots and Light Layer of Cream',
      price: '3.10',
    },
    {
      imgSrc: '',
      title: 'Cappucino',
      description: 'Espresso, and Smoothed Layer of Foam',
      price: '3.10',
    },
    {
      imgSrc: '',
      title: 'Vanilla Latte',
      description: 'Espresso Milk With Flavor,and Cream',
      price: '3.10',
    },
  ];

  return (
    <div className='px-[163px] pt-[150px] pb-[110px] flex justify-center '>
      <div>
        <div className='text-[50px] font-alice text-center mb-[60px]'>
          Explore Our Menu: Coffee Delights <br /> for Every Palate
        </div>
        <div className='grid grid-cols-2 gap-[60px]'>
          {menuData.map((data, index) => (
            <div key={index}>
              <div className='flex'>
                <div className='border-[25px] border-[#F3F0D9] size-[150px]'>
                  {data.imgSrc}
                </div>
                <div className='flex justify-between w-[602px]'>
                  <div className='flex flex-col place-content-center py-[37px] gap-[6px] ml-[30px]'>
                    <div className='font-alice text-[30px] text-[#1A1A1A]'>
                      {data.title}
                    </div>
                    <div className='text-[20px] text-[#444444]'>
                      {data.description}
                    </div>
                  </div>
                  <button className='mt-[38px] ml-[103px] border border-black font-alice text-[30px] rounded-full w-[126px] h-[74px]'>
                    {'$'}
                    {data.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
