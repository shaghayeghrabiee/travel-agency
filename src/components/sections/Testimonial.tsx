import React, { useCallback, useRef } from "react";
import { TestimonialTexts } from "../SolidData/DataList";
import { Text } from "../customComponent/Text";
import { Card } from "../customComponent/Card";
import Slider from "react-slick";
import profile1 from "../../assets/profile2.jpeg";
import profile2 from "../../assets/profile1.jpeg";
import profile3 from "../../assets/profile4.jpeg";
import profile4 from "../../assets/profile3.jpeg";
import { Button } from "../customComponent/Button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const renderProfileImg = useCallback((element: number) => {
    switch (element) {
      case 0:
        return profile1;
      case 1:
        return profile2;
      case 2:
        return profile3;
      case 3:
        return profile4;
      default:
        return "";
    }
  }, []);
  return (
    <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-36 gap-5">
      <main className="w-full grid md:grid-cols-2 lg:gap-0 gap-8 md:gap-5">
        <Text
          as="h1"
          className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium"
        >
          {TestimonialTexts.secondText}
        </Text>

        <div className="flex">
          <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
            {TestimonialTexts.feedBacks.map((text, index) => (
              <Card
                key={index}
                cardClass="bg-white border-[1px] rounded-xl border-gray-400 relative p-8 lg:h-[200px] h-[260px] lg:mb-4 w-full flex gap-4 justify-start"
                imageAlt={text.person}
                imageSrc={renderProfileImg(index)}
                imageWrapperClass="absolute mr-4 bottom-10 lg:bottom-3 right-0 h-20 w-20 overflow-hidden rounded-full shadow"
                cover="object-top"
                textWrapperClass="flex flex-col gap-3"
              >
                <Text as="p" className="text-sm font-light text-color3">
                  {text.text}
                </Text>
                <div className="flex flex-col gap-2">
                  <Text as="p" className="text-sm font-semibold text-color3">
                    {text.person}
                  </Text>
                  <Text as="p" className="text-sm font-light text-color3">
                    {text.location}
                  </Text>
                </div>
              </Card>
            ))}
          </Slider>
          <div className="flex flex-col">
            <Button
              onClick={previous}
              className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
              type="button"
            >
              <CaretUp size={18} color="currentColor" weight="fill" />
            </Button>
            <Button
              onClick={next}
              className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
              type="button"
            >
              <CaretDown size={18} color="currentColor" weight="fill" />
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Testimonial;
