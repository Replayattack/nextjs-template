import { AppProps } from 'next/app'
import { CacheProvider, Global, css } from '@emotion/core'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        min-height: 100%;
      }
    `}
  ></Global>
)

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />)
    </CacheProvider>
  )
}
