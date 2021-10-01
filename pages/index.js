import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Culi! I'm a full-stack software engineer.</p>
        <p>
          Find out more about me <a href="https://work.culi.page/">here</a>! To see what I'm working on right now, check out my <a href="https://work.culi.page/now">Now</a> page.
        </p>
      </section>
    </Layout>
  )
}

export default Home;

