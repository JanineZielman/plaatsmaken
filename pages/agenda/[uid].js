import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from 'moment';
import { PrismicNextImage } from "@prismicio/next";
import { SquareItem } from "../../components/SquareItem";

const Page = ({ page, navigation, settings}) => {
  let variation = 'default';
  let bgImg = page.data.image.url;
  let title =  page.data.title;
  let date = page.data.date;
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
      <div className={`container page`}>       
        <SquareItem variation={variation} bgImg={bgImg} title={title} date={date}/>
        <SliceZone slices={page.data.slices} components={components} />        
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("agenda_item", params.uid, {
    fetchLinks: `agenda_item.title, agenda_item.image, agenda_item.date, agenda_item.slices, agenda_item.content`
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("agenda_item");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
