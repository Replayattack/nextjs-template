import { AppProps } from 'next/app'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
