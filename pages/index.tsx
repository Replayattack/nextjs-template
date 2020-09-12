import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center antialiased">
      <Head>
        <title>Template</title>
      </Head>
      <h1 className="text-2xl">
        React template with Next.js, TypeScript and Tailwind CSS
      </h1>
    </div>
  )
}
