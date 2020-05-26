import Document, { Head, Main, NextScript, DocumentProps } from 'next/document'
import { extractCritical } from 'emotion-server'
import { EmotionCritical } from 'create-emotion-server'

export interface CustomDocumentProps extends EmotionCritical, DocumentProps {}

export default class CustomDocument extends Document<CustomDocumentProps> {
  static getInitialProps({ renderPage }): Promise<CustomDocumentProps> {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render(): JSX.Element {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
