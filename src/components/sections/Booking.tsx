import React, { useCallback } from "react";
import { BookingStepsTexts } from "../SolidData/DataList";
import { Text } from "../customComponent/Text";
import { List } from "../customComponent/List";
import {
  AirplaneInFlight,
  AirplaneTilt,
  ClipboardText,
  MapTrifold,
  Wallet,
} from "@phosphor-icons/react";
import { Card } from "../customComponent/Card";
import bookingImage1 from "../../assets/bookingImage1.jpeg";
import bookingImage2 from "../../assets/bookingImage2.jpeg";

const Booking = () => {
  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <MapTrifold size={15} color="currentColor" weight="fill" />;
      case 1:
        return <Wallet size={15} color="currentColor" weight="fill" />;
      case 2:
        return (
          <AirplaneInFlight size={15} color="currentColor" weight="fill" />
        );
      default:
        return "";
    }
  }, []);
  return (
    <section className="flex flex-col w-full h-auto justify-center items-start gap-5 relative lg:px-24 md:px-20 px-6 md:mt-8 lg:mt-8">
      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest"
      >
        {BookingStepsTexts.firstText}
      </Text>
      <main className="w-full grid md:grid-cols-2 gap-12 md:gap-5 lg:gap-6">
        <div className="w-full flex flex-col gap-6 order-0">
          <Text
            as="h2"
            className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium"
          >
            {BookingStepsTexts.secondText}
          </Text>
          <ul>
            {BookingStepsTexts.listOfSteps.map((step, index) => (
              <List className="flex gap-4 items-center justify-start m-1">
                <Text
                  as="p"
                  className={`text-white ${
                    index === 0
                      ? "bg-color3"
                      : index === 1
                      ? "bg-color1"
                      : "bg-color2"
                  } p-2 rounded-md`}
                >
                  {renderIcons(index)}
                </Text>
                <Text as="p" className="text-sm text-color3 font-light">
                  {step.text}
                </Text>
              </List>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2">
          <Card
            cardClass="lg:w-[70%] md:w-[80%] w-[90%] shadow-2xl shadow-sky-500/70 rounded-xl p-4 flex flex-col gap-4"
            imageAlt={BookingStepsTexts.cardOne.name}
            imageSrc={bookingImage1}
            imageWrapperClass="h-[150px] overflow-hidden rounded-xl shadow"
            cover="object-top"
            textWrapperClass="flex flex-col gap-3"
          >
            <Text as="h4" className="text-base font-medium text-color3">
              {BookingStepsTexts.cardOne.name}
            </Text>
            <Text as="h4" className="text-sm font-light text-color3">
              {BookingStepsTexts.cardOne.date}
            </Text>
            <div className="flex gap-7">
              <span className="flex w-10 h-10 bg-gray-200 rounded-full justify-center items-center p-2">
                <ClipboardText size={20} />
              </span>
              <span className="flex w-10 h-10 bg-gray-200 rounded-full justify-center items-center p-2">
                <MapTrifold size={20} />
              </span>
              <span className="flex w-10 h-10 bg-gray-200 rounded-full justify-center items-center p-2">
                <AirplaneTilt size={20} />
              </span>
            </div>
            <Text as="h4" className="text-sm font-light text-color3">
              {BookingStepsTexts.cardOne.people}
            </Text>
          </Card>
          <Card
            cardClass="absolute flex right-8 bottom-10 lg:right-0 justify-start items-start bg-white px-4 py-3 border-2 border-color3/5 shadow-md rounded-xl"
            imageAlt={BookingStepsTexts.cardOne.name}
            imageSrc={bookingImage2}
            imageWrapperClass="h-16 w-16 rounded-full overflow-hidden"
            cover="object-cover object-top"
            textWrapperClass="flex flex-col gap-2"
          >
            <Text as="p" className="text-xs font-light text-color3 mx-3">
              {BookingStepsTexts.cardTwo.status}
            </Text>
            <Text as="p" className="text-base font-medium text-color3 mx-3">
              {BookingStepsTexts.cardTwo.destination}
            </Text>
            <Text
              as="p"
              className="mx-3 text-xs font-light text-color1 pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-color2"
            >
              {BookingStepsTexts.cardTwo.completion}
            </Text>
          </Card>
          {/* object-cover It ensures that the image covers the entire container,
          cropping the parts that don't fit. */}
        </div>
      </main>
    </section>
  );
};

export default Booking;
