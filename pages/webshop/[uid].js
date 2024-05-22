import Head from "next/head";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { PrismicNextImage } from "@prismicio/next";
import { SquareItem } from "../../components/SquareItem";
import { SquareItemShop } from "../../components/SquareItemShop";
import { useRouter } from 'next/router'
import Link from "next/link";

const Page = ({ page, navigation, settings, items}) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  let variation = router.query.variation ? router.query.variation : 'default';
  let bgImg = page.data.image.full.url;
  // let title =  page.data.title;
  // let date = page.data.artist;
  // let jaar = page.data.jaar;
  // let info = page.data

  const {title, artist, jaar, info, techniek, afmeting, oplage, prijs} = page.data

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {page.data.title} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.title} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className={`container page shop-page`}>
        <Link className="back" href="/webshop"><h2>Back</h2></Link>       
        <SquareItemShop variation={variation} title={title} artist={artist} info={info} jaar={jaar} techniek={techniek} oplage={oplage} prijs={prijs} afmeting={afmeting}/>
        <div className="content" style={{backgroundImage: `url(${bgImg})`}}>

        </div>
        <div className="extra-info">
          <PrismicRichText field={page.data.extra_info}/>
        </div>
      </div>
      {!loading && items.filter((item) => page.tags.some(r=> item.tags.includes(r))).filter((item) => item.uid != page.uid).length > 0 &&
        <div className="related">
          <h2>Gerelateerde werken</h2>
          <div className="related-items">
            {items.filter((item) => page.tags.some(r=> item.tags.includes(r))).filter((item) => item.uid != page.uid).map((item, i) => {
              let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
              return(
                <a href={`/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                  <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.artist} />
                </a>
              )
            })}  
          </div>
        </div>
      }
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("shop_item", params.uid, {
    fetchLinks: `shop_item.title, shop_item.image`
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const items = await client.getAllByType('shop_item');

  return {
    props: {
      page,
      navigation,
      settings,
      items
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("shop_item");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
