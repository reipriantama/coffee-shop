import React from "react";
import Button from "../../ui/button";

const About = () => {
  const cardData = [
    {
      iconSrc: "/assets/section2/iconCoffeeMaker.png",
      title: "Coffeemaker",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    },
    {
      iconSrc: "/assets/section2/iconCoffeeGrinder.png",
      title: "Coffee Grinder",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    },
    {
      iconSrc: "/assets/section2/iconCoffeeCups.png",
      title: "Coffee Cups",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    },
    {
      iconSrc: "/assets/section2/iconEspressoMachine.png",
      title: "Espresso Machine",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    },
  ];

  return (
    <div className="text-white bg-black px-[163px] py-[150px]">
      <div className="flex ">
        <div className="flex flex-col py-[89px] w-[782px] mr-[153px] gap-[40px]">
          <div className="text-[50px] font-alice">
            Quality Coffee <br /> Cultivated by Good
          </div>
          <div className="text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim dolor sit amet, consectetur
            adipiscing elit aliquam purus sit amet luctus venenatis
          </div>
          <Button
            className="bg-[#F5D577] shadow-md shadow-[#F5D577] h-[63px] text-black"
            buttonText="shop now"
            imageSrc="hero/iconArrowRight.png"
          />
        </div>
        <div className="border-[1px] w-[606.5px] h-[543.5px]">Image</div>
      </div>
      <div className="flex gap-[30px] mt-[80px]">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col w-[376px] text-[20px]">
            <div className="mb-[30px]">
              <img src={`${process.env.PUBLIC_URL}${card.iconSrc}`} alt="" />
            </div>
            <div className="mb-[15px] font-bold">{card.title}</div>
            <div className="pr-5 text-[#BBBBBB]">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
