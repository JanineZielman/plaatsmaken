import Head from "next/head";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { predicate } from "@prismicio/client";
import React, { useEffect, useState } from 'react';

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { SquareItem } from "../../components/SquareItem";
import { SquareItemShop } from "../../components/SquareItemShop";
import { useRouter } from 'next/router'
import Link from "next/link";

const Page = ({ page, navigation, settings, items }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  let variation = router.query.variation ? router.query.variation : 'default';
  let bgImg = page.data.image.url.replace('auto=format%2Ccompress&rect=', '').replace('w=1080&h=1080', '').replace('&rect=', '');

  const { title, artist, jaar, info, techniek, afmeting, oplage, prijs } = page.data

  useEffect(() => {
    setLoading(false)
  }, [])

  console.log(page)

  return (
    <Layout
      navigation={navigation}
      settings={settings}
      page={page}
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
        {router.query.home == 'true' ?
          <Link className="back" href={`/`}>{page.lang == 'nl-nl' ? <h2>Terug</h2> : <h2>Back</h2>}</Link>
          :
          <Link className="back" href={'/webshop'}>
            {page.lang == 'nl-nl' ? <h2>Terug</h2> : <h2>Back</h2>}
          </Link>
        }
        <SquareItemShop slices={page.data.slices} slug={page.uid} variation={variation} title={title} artist={artist} info={info} jaar={jaar} techniek={techniek} oplage={oplage} prijs={prijs} afmeting={afmeting} image={bgImg} lang={page.lang} settings={settings.data} />
        <div className="content">
          <img src={bgImg} />
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        {page.data.extra_info &&
          <div className="extra-info">
            <PrismicRichText field={page.data.extra_info} />
          </div>
        }
      </div>
      {!loading && items.filter((item) => page.tags.some(r => item.tags.includes(r))).filter((item) => item.uid != page.uid).length > 0 &&
        <div className="related">
          <h2>{page.lang == 'nl-nl' ? 'Gerelateerde werken' : 'Related works'}</h2>
          <div className="related-items">
            {items.filter((item) => page.tags.some(r => item.tags.includes(r))).filter((item) => item.uid != page.uid).map((item, i) => {
              let randomVar = 'default' + Math.floor(Math.random() * 6 + 1);
              return (
                <a href={`/${item.lang}/webshop/${item.uid}`} key={`rel${i}`} className={`item-wrapper ${'default' + Math.floor(Math.random() * 5)}`}>
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

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const result = await client.query([
    predicate.at('my.shop_item.uid', params.uid),
  ], {
    fetchLinks: `shop_item.title, shop_item.image`,
    lang: locale,
  });
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
  const settings = await client.getSingle("settings", { lang: locale });
  const items = await client.getAllByType('shop_item', { lang: locale });

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

  const pages = await client.getAllByType("shop_item", { lang: "*" });

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
