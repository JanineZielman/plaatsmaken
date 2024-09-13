import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Header = ({ navigation, settings }) => {
  const router = useRouter();

  // Function to toggle the menu's visibility
  function toggleMenu() {
    var element = document.getElementById("nav");
    element.classList.toggle("active");

    var element2 = document.getElementById("menuIcon");
    element2.classList.toggle("active");
  }

  // Function to close the menu when clicking outside of the 'nav' element
  function handleClickOutside(event) {
    const nav = document.getElementById("nav");
    const menuIcon = document.getElementById("menuIcon");

    // Check if the nav or menu icon is active and if the click is outside of the nav
    if (nav && nav.classList.contains("active") && !nav.contains(event.target) && !menuIcon.contains(event.target)) {
      nav.classList.remove("active");
      menuIcon.classList.remove("active");
    }
  }

  // Use effect to add and clean up the event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="menu-icon" id="menuIcon"></div>
      </div>
      <div className="nav" id="nav">
        {navigation.data.menu.map((item, i) => {
          return (
            <PrismicLink key={`nav${i}`} field={item.link}>
              {item.label}
            </PrismicLink>
          );
        })}
        <div className="language-switcher">
          {/* <h2 className="active">NL</h2>
          <h2>EN</h2> */}
        </div>
        <div className="effect"></div>
      </div>
      {!router.asPath.includes("search") && !router.asPath.includes("webshop") && (
        <div className="search-icon">
          <Link href="/search">
            <h2>Search</h2>
          </Link>
        </div>
      )}
    </header>
  );
};
