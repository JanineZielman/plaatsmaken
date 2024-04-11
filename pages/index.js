import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const Index = ({ navigation, settings, page }) => {
  const [amount, setAmount] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])
	
	useEffect(() => {
    if (window.innerWidth>1400){
      setAmount(3);
    } 
    if (window.innerWidth<1400){
      setAmount(4);
    }
    if (window.innerWidth<900){
      setAmount(6);
    }
    if (window.innerWidth<600){
      setAmount(12);
    }
		function handleResize(){
			if (window.innerWidth>1400){
				setAmount(3);
			} 
			if (window.innerWidth<1400){
				setAmount(4);
			}
			if (window.innerWidth<900){
				setAmount(6);
			}
      if (window.innerWidth<600){
				setAmount(12);
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
      {!loading &&
        <div className="main-grid">
          <div className={`row row-1`}>
            <SliceZone slices={page.data.slices.slice(0,amount)} components={components} amount={amount} />
          </div>
          <div className={`row row-2`}>
            <SliceZone slices={page.data.slices.slice(amount,amount*2)} components={components}  />
          </div>
          <div className={`row row-3`}>
            <SliceZone slices={page.data.slices.slice(amount*2,amount*3)} components={components} />
          </div>
          <div className={`row row-4`}>
            <SliceZone slices={page.data.slices.slice(amount*3,amount*4)} components={components} />
          </div>
        </div>
      }
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home", {
    fetchLinks: `agenda_item.title, agenda_item.image, agenda_item.date, agenda_item.slices, agenda_item.content`
  });


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
