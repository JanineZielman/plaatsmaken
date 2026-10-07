import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { ShopItem } from "../components/ShopItem";
import sortBy from 'sort-by'

const Webshop = ({ navigation, settings, items }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const isDutch = items[0]?.lang === 'nl-nl';

  useEffect(() => {
    setLoading(false)
  }, [])

  const categories = [...new Set(items.map((item) => item.data.categorie?.trim()).filter(Boolean))].sort();
  const matchingItems = items.filter((item) => {
    const searchableText = [item.data.title, item.data.artist, item.data.categorie, ...item.tags].join(' ').toLowerCase();
    return (!selectedCategory || item.data.categorie?.trim() === selectedCategory) && searchableText.includes(searchTerm.toLowerCase());
  });
  const sortValue = sortField && `${sortDirection === 'desc' ? '-' : ''}data.${sortField}`;
  const sortItems = (shopItems) => sortValue ? [...shopItems].sort(sortBy(sortValue)) : shopItems;
  const ongoingItems = sortItems(matchingItems.filter((item) => item.data.ongoing));
  const regularItems = sortItems(matchingItems.filter((item) => !item.data.ongoing));

  function setSort(field) {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
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
      <input type="text" id="searchInput" className="search-bar search-shop" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search..."></input>
      <div className="sort-buttons">
        <button type="button" className={`sort ${sortField === 'title' ? 'active' : ''} ${sortField === 'title' && sortDirection === 'desc' ? 'rotate' : ''}`} onClick={() => setSort('title')}>Titel<span className="material-symbols-outlined">arrow_upward</span></button>
        <button type="button" className={`sort ${sortField === 'jaar' ? 'active' : ''} ${sortField === 'jaar' && sortDirection === 'desc' ? 'rotate' : ''}`} onClick={() => setSort('jaar')}>Jaar<span className="material-symbols-outlined">arrow_upward</span></button>
        <button type="button" className={`sort ${sortField === 'prijs' ? 'active' : ''} ${sortField === 'prijs' && sortDirection === 'desc' ? 'rotate' : ''}`} onClick={() => setSort('prijs')}>Prijs<span className="material-symbols-outlined">arrow_upward</span></button>
        <button type="button" className={`sort ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory('')}>{isDutch ? 'Alles' : 'All'}</button>
        {categories.map((category) => (
          <button type="button" className={`sort ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)} key={category}>{category}</button>
        ))}
      </div>
      {!loading &&
        <div className="archive-upcoming">
          {ongoingItems.length > 0 &&
            <div className="shop-upcoming">
              <h2 className="subtitle">{isDutch ? 'Uitgelicht' : 'Featured'}</h2>
              <div className="main-grid shop-grid shop-upcoming-grid" id="list">
                {ongoingItems.map((item, i) => {
                  let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                  return (
                    <a href={`/${item.lang}/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default' + Math.floor(Math.random() * 5)}`}>
                      <ShopItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.artist} />
                      <div className="search-info">
                        <p>
                          {item.data.title}
                          {item.data.artist}
                          {item.tags.map((tag) => {
                            return (
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
          }
          <div className="main-grid shop-grid">
            {regularItems.map((item, i) => {
              let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
              return (
                <a href={`/${item.lang}/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default' + Math.floor(Math.random() * 5)}`}>
                  <ShopItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.artist} />
                  <div className="search-info">
                    <p>
                      {item.data.title}
                      {item.data.artist}
                      {item.tags.map((tag) => {
                        return (
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
      }
    </Layout>
  );
};

export default Webshop;

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings");
  const items = await client.getAllByType('shop_item', { lang: locale });


  return {
    props: {
      navigation,
      settings,
      items
    },
  };
}
