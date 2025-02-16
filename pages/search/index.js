import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { SquareItem } from "../../components/SquareItem";

const Index = ({ navigation, settings, items }) => {
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
      <div className="fade-in-page">
        <input type="text" id="searchInput" className="search-bar" onKeyUp={searchItems} placeholder="Search..."></input>
        <div className="archive-upcoming">
          <div className="main-grid archief-grid">
            {items.map((item, i) => {
              let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
              let link;
              if (item.type == 'shop_item'){
                link='webshop'
              } else {
                link = 'agenda'
              }
              return(
                <a href={`/${item.lang}/${link}/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                  <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} preview_video={item.data.preview_video}/>
                  <div className="search-info">
                    <p>
                      {item.data.title}
                      {item.data.date}
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
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation", {lang: locale});
  const settings = await client.getSingle("settings");
  const agenda_items = await client.getAllByType('agenda_item', {lang: locale});
  const shop_items = await client.getAllByType('shop_item', {lang: locale});

  const items = agenda_items.concat(shop_items);

  return {
    props: {
      navigation,
      settings,
      items,
    },
  };
}
