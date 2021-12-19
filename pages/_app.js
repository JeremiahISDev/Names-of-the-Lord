import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <h1 class="font-serif text-3xl pt-6 text-center text-royalb font-bold underline decoration-sky-500/30 hover:decoration-sky-500 hover:decoration-dashed">
		<a href="/"> Names Of Our Lord</a>
	</h1>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
