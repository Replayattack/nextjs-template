import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/core'
import '../styles/global.css'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
