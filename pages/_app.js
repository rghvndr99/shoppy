import React, {useEffect} from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
useEffect(() => {
  TagManager.initialize({ 
    gtmId: 'GTM-XXXXX',//something like GTM-WN5KJ5KK
 });
}, []);
return <Component {...pageProps} />
}

export default MyApp
