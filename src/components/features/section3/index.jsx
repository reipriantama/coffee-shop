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
      title: 'White Chocolate',
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
    {
      imgSrc: '',
      title: 'Iced Caramel Latte',
      description: 'Espresso, Milk, Ice and Caramel Sauce',
      price: '2.12',
    },
    {
      imgSrc: '',
      title: 'Espresso Machiato',
      description: 'Rich Espresso With Milk and Foam',
      price: '3.08',
    },
  ];

  return (
    <div className='px-[163px] pt-[150px] pb-[110px] flex justify-center'>
      <div>
        <div className='sm:text-[40px] sm:w-[570px] text-[50px] font-alice text-center mb-[60px] 2xl:w-[832px] 2xl:ml-[381px]'>
          Explore Our Menu: Coffee Delights for Every Palate
        </div>
        <div className='sm:flex sm:flex-col  2xl:grid grid-cols-2 gap-[60px]'>
          {menuData.map((data, index) => (
            <div key={index}>
              <div className='flex '>
                <div className='sm:h-[145px] sm:border-[25px] xl:h-[200px] xl:border-[25px] border-[#F3F0D9] flex-none '>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/section3/caffeLatte.png`}
                    alt='img'
                    className='size-24 xl:size-32 2xl:size-[150px] object-cover'
                  />
                </div>
                <div className='sm:flex xl:flex xl:justify-between w-[602px]'>
                  <div className='flex flex-col place-content-center xl:py-[37px] gap-[6px] ml-[30px]'>
                    <div className='font-alice text-[30px] text-[#1A1A1A]'>
                      {data.title}
                    </div>
                    <div className='sm:w-[300px] sm:pr-5 text-[20px] text-[#444444]'>
                      {data.description}
                    </div>
                  </div>
                  <button className=' mt-[38px] xl:ml-[103px] border border-black font-alice text-[30px] rounded-full w-[126px] h-[74px]'>
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
