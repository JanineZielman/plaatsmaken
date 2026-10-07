import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { predicate } from "@prismicio/client";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { SquareItem } from "../components/SquareItem";

const Page = ({ page, navigation, settings, items, params}) => {
  const [loading, setLoading] = useState(true);
  const date = new Date().toISOString().split('T')[0];
  const categoryUids = params.uid === 'tentoonstellingen' ? ['tentoonstelling', 'tentoonstellingen'] : [params.uid];
  const categoryItems = items.filter((item) => categoryUids.includes(item.data.category.uid));
  const endDate = (item) => item.data.einddatum || item.data.order_date;
  const ongoingItems = categoryItems.filter((item) => item.data.ongoing === true && endDate(item) >= date);
  const upcomingItems = categoryItems.filter((item) => item.data.ongoing !== true && item.data.order_date >= date);
  const archiveItems = categoryItems.filter((item) => item.data.ongoing === true ? endDate(item) < date : item.data.order_date < date);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <Layout
      navigation={navigation}
      settings={settings}
      page={page}
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
          <div className="archive-upcoming">
            { ongoingItems.length > 0  ?
              <h2 className="subtitle">Actueel</h2>
              :
              <>
              {page.data.slices.length > 0 &&
                <h2 className="subtitle">Actueel</h2>
              }
              </>
            }
            <div className="main-grid upcoming-grid">
              {page.data.slices.length > 0 &&
                <div className="page-intro small">
                  <SliceZone slices={page.data.slices} components={components} />
                </div>
              }
              {ongoingItems.map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/${item.lang}/agenda/${item.uid}?agenda=true`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.date} preview_video={item.data.preview_video}/>
                  </a>
                )
              })}  
            </div>
            {upcomingItems.length > 0 &&
              <h2 className="subtitle">Verwacht</h2>
            }
            <div className="main-grid upcoming-grid">
              {upcomingItems.map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/${item.lang}/agenda/${item.uid}?agenda=true`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
                    <SquareItem variation={randomVar} bgImg={item.data.image.url} title={item.data.title} date={item.data.date} preview_video={item.data.preview_video}/>
                  </a>
                )
              })}  
            </div>
            {archiveItems.length > 0 &&
              <h2 className="subtitle">Archief</h2>
            }
            <div className="main-grid archief-grid">
              {archiveItems.map((item, i) => {
                let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
                return(
                  <a href={`/${item.lang}/agenda/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default'+Math.floor(Math.random() * 5)}`}>
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

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const result = await client.query([
    predicate.at('my.page.uid', params.uid),
  ], { lang: locale });
  const page = result.results[0];

  if (!page) {
    return {
      redirect: {
        destination: locale === 'nl-nl' ? '/page/404' : `/${locale}/page/404`,
        permanent: false,
      },
    };
  }

  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings");
  const items = await client.getAllByType('agenda_item', {
    lang: locale,
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

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.filter((page) => page.uid !== '404').map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
