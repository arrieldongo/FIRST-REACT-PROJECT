import Head from 'next/head'

interface props {
  title: string;
  description: string
}

export const Seo = ({title, description}: props) => {
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  </>)
}