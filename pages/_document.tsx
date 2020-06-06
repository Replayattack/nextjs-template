import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { extractCritical } from 'emotion-server'
import { EmotionCritical } from 'create-emotion-server'

interface CustomDocumentProps extends DocumentInitialProps, EmotionCritical {}

export default class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<CustomDocumentProps> {
    const initialProps = await Document.getInitialProps(context)
    const page = await context.renderPage()
    const styles = extractCritical(page.html)

    return { ...initialProps, ...page, ...styles }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
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
      </Html>
    )
  }
}
