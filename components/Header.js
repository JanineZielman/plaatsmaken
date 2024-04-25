import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = ({ navigation, settings }) => {
  const router = useRouter();

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
        <div className="effect"></div>
      </div>
      {!router.asPath.includes('search') && !router.asPath.includes('webshop') &&
        <div className="search-icon">
          <Link href="/search"><h2>Search</h2></Link>
        </div>
      }
    </header>
  );
};
