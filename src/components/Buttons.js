import React from "react";
import { ButtonsInfo } from "../data";
import ButtonLink from "./ButtonLink";

const Buttons = () => {
  return (
    <div className="buttons">
      {ButtonsInfo.map((item) => {
        const { id, link, text } = item;
        return <ButtonLink key={id} link={link} text={text} />;
      })}
    </div>
  );
};

export default Buttons;
