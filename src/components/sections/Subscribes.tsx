import React from "react";
import { Button } from "../customComponent/Button";
import { Envelope } from "@phosphor-icons/react";
import { Input } from "../customComponent/Input";

const Subscribes = () => {
  return (
    <section className="flex gap-4">
      <Input
        containerClass="relative"
        inputClass="h-full border-xl pl-10"
        placeholder="Your email..."
      >
        <div className="absolute top-5 left-3 text-color3/80">
          <Envelope size={18} color="currentColor" />
        </div>
      </Input>
      <Button
        className="btn bg-color1 hover:bg-gradient-to-tr hover:from-color1 hover:to-color3 rounded-xl border-[1px] border-gray-400 text-white p-4"
        type="button"
      >
        Subscribes
      </Button>
    </section>
  );
};

export default Subscribes;
