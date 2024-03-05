import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const Index = ({ navigation, settings, page }) => {
  console.log(page)
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
      <div className="main-grid">
        {page.data.agenda_items.map((item, i) => {
          return(
            <div key={`item${i}`} className="item" style={{backgroundImage:`url(${item.agenda_item.data.image.url})`}}>
              <h2>{prismicH.asText(item.agenda_item.data.title)}</h2>
              <p>{item.agenda_item.data.date}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home", {
    fetchLinks: `agenda_item.title, agenda_item.image, agenda_item.date`
  });


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
