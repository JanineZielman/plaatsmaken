import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const Index = ({ navigation, settings, page }) => {
  const [amount, setAmount] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {      
      let selected = document.querySelectorAll(".square-5, .square-7, .square-11, .square-12")[Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-11, .square-12").length)]
      if (selected.classList[1] == 'square-12'){
        document.getElementById('logo')?.setAttribute('src', '/PM-500-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-11'){
        document.getElementById('logo')?.setAttribute('src', '/PM-400-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-7'){
        document.getElementById('logo')?.setAttribute('src', '/PM-300-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-5'){
        document.getElementById('logo')?.setAttribute('src', '/PM-200-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      selected.append(document.getElementById('logo'));
    }, 100)
    setInterval(() => { 
      let selected = document.querySelectorAll(".square-5, .square-7, .square-11, .square-12")[Math.floor(Math.random() * document.querySelectorAll(".square-5, .square-7, .square-11, .square-12").length)]
      if (selected.classList[1] == 'square-12'){
        document.getElementById('logo')?.setAttribute('src', '/PM-500-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-11'){
        document.getElementById('logo')?.setAttribute('src', '/PM-400-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-7'){
        document.getElementById('logo')?.setAttribute('src', '/PM-300-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      if (selected.classList[1] == 'square-5'){
        document.getElementById('logo')?.setAttribute('src', '/PM-200-2.mp4')
        document.getElementById('logo')?.classList.add('visible');
      }
      selected.append(document.getElementById('logo'));
    }, 5000);
  }, [])
  

  useEffect(() => {
    setLoading(false)
  }, [])
	
	useEffect(() => {
    if (window.innerWidth>1400){
      setAmount(3);
    } 
    if (window.innerWidth<1400){
      setAmount(4);
    }
    if (window.innerWidth<900){
      setAmount(6);
    }
    if (window.innerWidth<600){
      setAmount(12);
    }
		function handleResize(){
			if (window.innerWidth>1400){
				setAmount(3);
			} 
			if (window.innerWidth<1400){
				setAmount(4);
			}
			if (window.innerWidth<900){
				setAmount(6);
			}
      if (window.innerWidth<600){
				setAmount(12);
			}
		}
		window.addEventListener('resize', handleResize)
  })
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
            <div className={`row row-1`}>
              <SliceZone slices={page.data.slices.slice(0,amount)} components={components} amount={amount} />
            </div>
            <div className={`row row-2`}>
              <SliceZone slices={page.data.slices.slice(amount,amount*2)} components={components}  />
            </div>
            <div className={`row row-3`}>
              <SliceZone slices={page.data.slices.slice(amount*2,amount*3)} components={components} />
            </div>
            <div className={`row row-4`}>
              <SliceZone slices={page.data.slices.slice(amount*3,amount*4)} components={components} />
            </div>
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
    fetchLinks: `agenda_item.title, agenda_item.image, agenda_item.date, agenda_item.slices, agenda_item.content,  agenda_item.preview_video`
  });


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
