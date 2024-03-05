import React from "react";
import partner1 from "../../assets/partners1.png";
import partner2 from "../../assets/partners2.png";
import partner3 from "../../assets/partners3.png";
import Slider from "react-slick";
import { Card } from "../customComponent/Card";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="w-full h-auto lg:px-20 px-6 my-20">
      <Slider {...settings}>
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner1}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner2}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc={partner3}
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
      </Slider>
    </section>
  );
};

export default Partners;
