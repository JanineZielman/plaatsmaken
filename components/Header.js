import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings }) => {

  function toggleMenu() {
    var element = document.getElementById("navItems");
    element.classList.toggle("active");
  }

  return (
    <header>
      <div className="navigation">
        
      </div>
    </header>
  );
};
