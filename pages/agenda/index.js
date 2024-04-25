import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SquareItem } from "../../components/SquareItem";

const Page = ({ navigation, settings, items}) => {
  const [loading, setLoading] = useState(true);
  let date = new Date().toJSON();

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
          Agenda | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Agenda | ${prismicH.asText(settings.data.siteTitle)}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
        <h2 className="page-title">Agenda</h2>
        {!loading &&
          <div className="archive-upcoming">
            {items.filter((item) => new Date(item.data.order_date).toJSON() >= date).length > 0 &&
              <h2 className="subtitle">Actueel & Verwacht</h2>
            }
            <div className="main-grid upcoming-grid">
              {items.filter((item) => new Date(item.data.order_date).toJSON() >= date).map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.date} preview_video={item.data.preview_video}/>
                  </a>
                )
              })}  
            </div>
            {items.filter((item) => new Date(item.data.order_date).toJSON() < date).length > 0 &&
              <h2 className="subtitle">Archief</h2>
            }
            <div className="main-grid archief-grid">
              {items.filter((item) => new Date(item.data.order_date).toJSON() < date).map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} preview_video={item.data.preview_video}/>
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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

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
      navigation,
      settings,
      items,
    },
  };
}