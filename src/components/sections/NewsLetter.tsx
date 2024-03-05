import React from "react";
import { Text } from "../customComponent/Text";
import {NewsletterTexts} from "../SolidData/DataList"
import Subscribes from "./Subscribes";
const NewsLetter = () => {
  return (
    <section className="w-full h-[500px] bg-color3/5 relative">
      <div className="absolute bg-color3/10 bottom-0 left-0 w-[300px] h-[300px]"></div>
      <div className="absolute bg-color3/10 top-0 w-[300px] right-0 h-[300px]"></div>
      <main className="flex justify-center items-center absolute top-1/3 flex flex-col gap-8">
        <Text
          as="h3"
          className="lg:text-3xl md:text-2xl text-xl text-center text-color3/70 lg:w-3/5 w-full "
        >
          {NewsletterTexts.firstText}
        </Text>
        <Subscribes/>
      </main>
    </section>
  );
};

export default NewsLetter;
