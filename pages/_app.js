import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
	  <Head>
	  <title>The Names Of Our Lord</title>
	  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0088ff"/>
<meta name="apple-mobile-web-app-title" content="Names Of Our Lord"/>
<meta name="application-name" content="Names Of Our Lord"/>
<meta name="msapplication-TileColor" content="#4f4fff"/>
<meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
<meta name="theme-color" content="#0088ff"/>
	  </Head>
    <h1 class="font-serif text-3xl pt-6 text-center text-royalb font-bold underline decoration-sky-500/30 hover:decoration-sky-500 hover:decoration-dashed">
		<a href="/"> Names Of Our Lord</a>
	</h1>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
