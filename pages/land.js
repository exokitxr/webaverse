import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { useAppContext } from "../libs/contextLib";
import { getLands } from "../functions/UIStateFunctions.js";
import LandCardGrid from "../components/LandCardGrid";
import Loader from "../components/Loader";

export default () => {
  const { globalState, setGlobalState } = useAppContext();
  const [lands, setLands] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getLands(1, 100);
      setLands(data);
    })();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Land | Webaverse</title>
        <meta name="description" content={"Check out the land in Webaverse."} />
        <meta property="og:title" content={"Land | Webaverse"} />
        <meta property="og:image" content={"https://webaverse.com/webaverse.png"} />
        <meta name="theme-color" content="#c4005d" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      { lands ?
        <LandCardGrid data={lands} globalState={globalState} />
      :
        <Loader loading={true} />
      }
    </div>
  )
}
