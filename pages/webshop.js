import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { ShopItem } from "../components/ShopItem";
import sortBy from 'sort-by'

const Webshop = ({ navigation, settings, items }) => {
  const [amount, setAmount] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])
	
	useEffect(() => {
    if (window.innerWidth>1400){
      setAmount(2);
    } 
    if (window.innerWidth<1400){
      setAmount(3);
    }
    if (window.innerWidth<900){
      setAmount(4);
    }
    if (window.innerWidth<600){
      setAmount(8);
    }
		function handleResize(){
			if (window.innerWidth>1400){
				setAmount(2);
			} 
			if (window.innerWidth<1400){
				setAmount(3);
			}
			if (window.innerWidth<900){
				setAmount(4);
			}
      if (window.innerWidth<600){
				setAmount(8);
			}
		}
		window.addEventListener('resize', handleResize)
  })

  function searchItems() {
    // Declare variables
    var input, filter, li, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    var div = document.getElementsByClassName('item-wrapper');
    li = document.getElementsByClassName('search-info');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      var info = li[i].getElementsByTagName("p")[0]; 
      txtValue = info.innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "visible";
        div[i].style.opacity = "1";
        div[i].style.width = "";
        div[i].style.margin = "";
      } else {
        div[i].style.visability = "hidden";
        div[i].style.opacity = "0";
        div[i].style.width = "0";
        div[i].style.margin = "0";
      }
    }
  }
  
  const [sortValue, setSortValue] = useState('');
  function sortTitle(e){
    document.getElementById('dateSort').classList.remove('active')
    document.getElementById('priceSort').classList.remove('active')
    document.getElementById('titleSort').classList.add('active')
    document.getElementById('titleSort').classList.toggle('rotate')
    if (e.target.classList.length > 2){
      setSortValue('data.title')
    } else {
      setSortValue('-data.title')
    }
  }

  function sortDate(e){
    document.getElementById('titleSort').classList.remove('active')
    document.getElementById('priceSort').classList.remove('active')
    document.getElementById('dateSort').classList.add('active')
    document.getElementById('dateSort').classList.toggle('rotate')
    if (e.target.classList.length > 2){
      setSortValue('data.jaar')
    } else {
      setSortValue('-data.jaar')
    }
  }

  function sortPrice(e){
    document.getElementById('titleSort').classList.remove('active')
    document.getElementById('dateSort').classList.remove('active')
    document.getElementById('priceSort').classList.add('active')
    document.getElementById('priceSort').classList.toggle('rotate')
    if (e.target.classList.length > 2){
      setSortValue('data.prijs')
    } else {
      setSortValue('-data.prijs')
    }
  }

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  useEffect(() => {
    shuffle(items)
  }, [])

  
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <h2 className="page-title">Webshop</h2>
      <input type="text" id="searchInput" className="search-bar search-shop" onKeyUp={searchItems} placeholder="Search..."></input>
      <div className="sort-buttons">
        <div className="sort" id="titleSort" onClick={sortTitle}>Titel<span className="material-symbols-outlined">arrow_upward</span></div>
        <div className="sort" id="dateSort" onClick={sortDate}>Jaar<span className="material-symbols-outlined">arrow_upward</span></div>
        <div className="sort" id="priceSort" onClick={sortPrice}>Prijs<span className="material-symbols-outlined">arrow_upward</span></div>
      </div>
      {!loading &&
        <div className="main-grid shop-grid" id="list">
          {items.sort(sortBy(sortValue)).map((item, i) => {
            let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
            return(
              <a href={`/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                <ShopItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.artist} />
                <div className="search-info">
                  <p>
                    {item.data.title}
                    {item.data.artist}
                    {item.tags.map((tag) => {
                      return(
                        <>{tag}</>
                      )
                    })}
                  </p>
                </div>
              </a>
            )
          })}  
        </div>
      }
    </Layout>
  );
};

export default Webshop;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const items = await client.getAllByType('shop_item');


  return {
    props: {
      navigation,
      settings,
      items
    },
  };
}
