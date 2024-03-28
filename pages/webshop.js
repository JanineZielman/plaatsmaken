import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { SquareItem } from "../components/SquareItem";

const Webshop = ({ navigation, settings, items }) => {
  const [amount, setAmount] = useState(2);
  const [loading, setLoading] = useState(true);

  console.log(items)

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
      {!loading &&
        <div className="main-grid shop-grid">
          {items.map((item, i) => {
            let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
            return(
              <a href={`/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.artist} />
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
