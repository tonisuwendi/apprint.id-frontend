import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Config from '../../service/Config';

const MetaComp = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.desc} />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={props.title}/>
        <meta property="og:description" content={props.desc} />
        <meta property="og:url" content={Config.thisURL} />
        <meta property="og:site_name" content={props.appName} />
        <meta property="og:image" content={`${Config.backendURL}public/img/${props.img}`} />
        <meta property="og:image:secure_url" content={`${Config.backendURL}public/img/${props.img}`} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:image" content={`${Config.backendURL}public/img/${props.img}`} />
        <link rel="icon" href={`${Config.backendURL}public/img/logo/${props.favicon}`} />
        <link rel="apple-touch-icon" href={`${Config.backendURL}public/img/logo/${props.favicon}`} />
      </Helmet>
    </HelmetProvider>
  )
}

export default MetaComp;