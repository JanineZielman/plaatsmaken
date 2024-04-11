import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { SquareItem } from "../components/SquareItem";

const Over = ({ page, navigation, settings}) => {

  let variation = 'default';
  let bgImg = page.data.image.url;

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
      <div className={`container page`}>       
        <SquareItem variation={variation} bgImg={bgImg}/>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
        {/* <div className="page content">
          <SliceZone slices={page.data.slices} components={components} />
        </div> */}
    </Layout>
  );
};

export default Over;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", 'over');
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
