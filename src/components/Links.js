import React from "react";
import Link from "./Link";
import { navLinksLeftSide, navLinksRightSide } from "../data";

const Links = ({ parentClass, itemClass, position }) => {
  const linksToRender = position === "left" ? navLinksLeftSide : navLinksRightSide;

  const allNavLinks = [...navLinksLeftSide, ...navLinksRightSide]

  return (
    <ul className={parentClass}>
      {parentClass === "footer-links" ? (
        allNavLinks.map((link) => (
          <Link key={link.id} link={link} itemClass={itemClass} />
        ))
      ) : (
        linksToRender.map((link) => (
          <Link key={link.id} link={link} itemClass={itemClass} />
        ))
      )}
    </ul>
  );
};

export default Links;
