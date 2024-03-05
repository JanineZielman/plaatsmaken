import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import React, { useEffect, useState } from 'react';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

const Landing = () => {

  return (
    <div className="landing">
      <div className="vid">
        <video width="400" autoPlay muted loop>
          <source src="./logo.mov" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Landing;
