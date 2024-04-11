import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SquareItem } from "../../components/SquareItem";

const Page = ({ page, navigation, settings, items}) => {
  const [loading, setLoading] = useState(true);

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
          {prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
        <h2 className="page-title">{prismicH.asText(page.data.title)}</h2>
        {!loading &&
          <div className="main-grid shop-grid">
            {items.map((item, i) => {
              let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
              return(
                <a href={`/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                  <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.date} />
                </a>
              )
            })}  
          </div>
        }
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", 'agenda');
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
    },
  };
}