import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { predicate } from "@prismicio/client";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SquareItem } from "../../components/SquareItem";

const Page = ({ page, navigation, settings }) => {

  let variation = 'default';
  let bgImg = page.data.image.url;

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
      <div className={`container page`}>
        <SquareItem variation={variation} bgImg={bgImg} />
        <SliceZone slices={page.data.slices} components={components} />
      </div>
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

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
