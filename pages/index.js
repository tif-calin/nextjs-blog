import Head from 'next/head';
import Date from '../components/date';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

const getStaticProps = async () => (
  { props: { allPostsData: getSortedPostsData() } }
);

const Home = ({ allPostsData }) => {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;
export { getStaticProps };
