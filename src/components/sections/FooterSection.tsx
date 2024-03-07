import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../customComponent/Text";
import { List } from "../customComponent/List";
import { FooterTexts } from "../SolidData/DataList";
import apd from "../../assets/appdownload.png";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Image } from "../customComponent/Image";

const FooterSection = () => {
  return (
    <footer className="w-full grid lg:grid-cols-5 md:grid-cols-3 bg-white lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
      <div className="flex flex-col">
        <Text as="h2" className="text-xl mb-6">
          Travel with us
        </Text>
        <Text as="p" className="text-sm ">
          {FooterTexts.underLogoText}
        </Text>
      </div>
      <div className="flex flex-col">
        <Text className="text-xl text-color3 mb-6" as="h2">
          {FooterTexts.quickLinks.caption}
        </Text>
        {FooterTexts.quickLinks.links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="text-color4 transition-all duration-300 hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <Text className="text-xl text-color3 mb-6" as="h2">
          {FooterTexts.contacts.caption}
        </Text>
        {FooterTexts.contacts.links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="text-color4 transition-all duration-300 hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <Text className="text-xl text-color3 mb-6" as="h2">
          {FooterTexts.more.caption}
        </Text>
        {FooterTexts.more.links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="text-color4 transition-all duration-300 hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
        <ul className="w-full flex items-center lg:justify-center gap-4">
          <List>
            <Link
              to={`/`}
              className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
            >
              <FacebookLogo size={15} color="currentColor" weight="fill" />
            </Link>
          </List>
          <List>
            <Link
              to={`/`}
              className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
            >
              <InstagramLogo size={15} color="currentColor" weight="fill" />
            </Link>
          </List>
          <List>
            <Link
              to={`/`}
              className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color3 hover:text-white"
            >
              <TwitterLogo size={15} color="currentColor" weight="fill" />
            </Link>
          </List>
        </ul>

        <Text as="p" className="text-base font-light text-color4">
          Discover Our App
        </Text>
        <Image
          className="w-28"
          image={apd}
          alt="App Download"
          as="a"
          href="/"
        />
      </div>
    </footer>
  );
};

export default FooterSection;
