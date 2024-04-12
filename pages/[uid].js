import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { SquareItem } from "../components/SquareItem";

const Page = ({ page, navigation, settings, items, params}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  let date = new Date().toJSON();

  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
        <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
        <div className="page-intro">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        {!loading &&
          <div className="archive-upcoming">
            {items.filter((item) => item.data.category.uid == params.uid).filter((item) => new Date(item.data.order_date).toJSON() >= date).length > 0 &&
              <h2 className="subtitle">Actueel & Verwacht</h2>
            }
            <div className="main-grid upcoming-grid">
              {items.filter((item) => item.data.category.uid == params.uid).filter((item) => new Date(item.data.order_date).toJSON() >= date).map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.date} />
                  </a>
                )
              })}  
            </div>
            {items.filter((item) => item.data.category.uid == params.uid).filter((item) => new Date(item.data.order_date).toJSON() < date).length > 0 &&
              <h2 className="subtitle">Archief</h2>
            }
            <div className="main-grid archief-grid">
              {items.filter((item) => item.data.category.uid == params.uid).filter((item) => new Date(item.data.order_date).toJSON() < date).map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title}/>
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

  const page = await client.getByUID("page", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const items = await client.getAllByType('agenda_item', {
    orderings: [
      {
        field: 'my.agenda_item.order_date',
        direction: 'desc',
      },
    ],
  });

  return {
    props: {
      page,
      navigation,
      settings,
      items,
      params
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
