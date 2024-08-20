import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const Index = ({ navigation, settings, page }) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {   
      let selected = document.querySelectorAll(".square-5, .square-7, .square-11, .square-11-2, .square-12")[Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-11, .square-11-2, .square-12").length)]
      if (selected.classList[1] == 'square-12'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSj2UaF0TcGJHh9_PM_500_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-11'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjz0aF0TcGJHh6_PM_250_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-7'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjykaF0TcGJHh3_PM_100_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-5'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjx0aF0TcGJHh0_PM_50_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (document.getElementById('logo')){
        selected.append(document.getElementById('logo'));
        document.getElementById('logo').playbackRate = 2;   
      }
    }, 100)
    setInterval(() => { 
      let selected = document.querySelectorAll(".square-5, .square-7, .square-11, .square-11-2, .square-12")[Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-11, .square-11-2, .square-12").length)]
      if (selected.classList[1] == 'square-12'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSj2UaF0TcGJHh9_PM_500_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-11'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjz0aF0TcGJHh6_PM_250_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-7'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjykaF0TcGJHh3_PM_100_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-5'){
        document.getElementById('logo')?.setAttribute('src', 'https://plaatsmaken.cdn.prismic.io/plaatsmaken/ZsSjx0aF0TcGJHh0_PM_50_balls-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (document.getElementById('logo')){
        selected.append(document.getElementById('logo'));
        document.getElementById('logo').playbackRate = 2;   
      }
    }, 8000);
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [])
	
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

        <h2 className="home-title">Plaatsmaken</h2>
        <video muted autoPlay loop playsInline id="logo"></video>
        {!loading &&
          <div className="main-grid home-grid">
             <SliceZone slices={page.data.slices.slice(0,12)} components={components} />
          </div>
        }

    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home", {
    fetchLinks: `agenda_item.title, agenda_item.image, agenda_item.date, agenda_item.slices, agenda_item.content,  agenda_item.preview_video, shop_item.title, shop_item.image, shop_item.artist, shop_item.slices`
  });


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
