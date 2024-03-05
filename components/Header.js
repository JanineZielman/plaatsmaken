import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings }) => {
  console.log(navigation)

  function toggleMenu() {
    var element = document.getElementById("nav");
    element.classList.toggle("active");

    var element2 = document.getElementById("menuIcon");
    element2.classList.toggle("active");
  }

  return (
    <header>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="menu-icon" id="menuIcon"></div>
      </div>
      <div className="nav" id="nav">
        {navigation.data.menu.map((item, i) => {
          return(
            <PrismicLink key={`nav${i}`} field={item.link}>{item.label}</PrismicLink>
          )
        })}
      </div>
    </header>
  );
};
