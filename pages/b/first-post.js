import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../components/layout'

const FirstPost = () => {
  return <Layout>
    <Head>
      <title>First Post | Culi's Next Blog</title>
    </Head>

    <h1>First Post</h1>

    <Image src="/profile.jpg" alt="Culi as a Picrew" height="144" width="144" />

    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </Layout>
};

export default FirstPost;