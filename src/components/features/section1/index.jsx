import React from 'react';
import Button from '../../ui/button';

const Home = () => {
  const sectionData = [
    {
      title: 'Guest',
      iconSrc: '/assets/section1/iconPeople.png',
      options: ['1 person', '2 persons', '3 persons', '4 persons'],
    },
    {
      title: 'For',
      iconSrc: '/assets/section1/iconCalendar.png',
      options: ['02.02.2024', '03.02.2024', '04.02.2024', '05.02.2024'],
    },
    {
      title: 'At',
      iconSrc: '/assets/section1/iconClock.png',
      options: ['07.00', '08.00', '09.00', '10.00'],
    },
  ];

  const cardData = [
    {
      imgSrc: '/assets/section1/beautyPlace.png',
      title: 'Beautiful Place',
      description:
        'Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est',
    },
    {
      imgSrc: '/assets/section1/hotCoffee.png',
      title: 'Feel The Coffee',
      description:
        'Vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.',
    },
    {
      imgSrc: '/assets/section1/fullTaste.png',
      title: 'Full Taste',
      description:
        'Alienum phaedrum to rquatos nec eu, Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.',
    },
  ];
  return (
    <div className='px-[163px] py-[150px]'>
      <div className='flex justify-center font-alice text-[50px] text-center mb-[50px]'>
        Discover the Perfect Brew at <br /> Gedion Coffee
      </div>
      <div className='grid grid-cols-4 gap-[30px]'>
        {sectionData.map((section, index) => (
          <div key={index}>
            <div className='text-[20px] mb-[10px]'>{section.title}</div>
            <div className='flex flex-row items-center border border-black rounded-full '>
              <div className='border-r-2 border-black px-[20px]'>
                <img
                  src={`${process.env.PUBLIC_URL}${section.iconSrc}`}
                  alt='img'
                />
              </div>
              <select
                className='bg-transparent border-none px-[30px] py-[17px] font-merriweather w-[280px] text-[14px]'
                name='persons'
                id='persons'
              >
                {section.options.map((option, optionIndex) => (
                  <option className='' key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <div>
          <Button
            className='mt-[39px] flex justify-center bg-[#F5D577] w-[277px] h-[58px]'
            buttonText='book a table'
            imageSrc='hero/iconArrowRight.png'
          />
        </div>
      </div>
      <div className='flex mt-[50px] gap-[30px]'>
        {cardData.map((data, index) => (
          <div key={index} className='w-[511px]'>
            <div className='border border-black size-[511px]'>
              <img
                className='size-[511px]'
                src={`${process.env.PUBLIC_URL}${data.imgSrc}`}
                alt='img'
              />
            </div>
            <div className='flex flex-col items-center p-[20px]'>
              <div className='mt-[30px] font-alice text-[30px] text-[#1A1A1A]'>
                {data.title}
              </div>
              <div className='text-[20px] text-center mt-[20px] text-[#666666]'>
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;