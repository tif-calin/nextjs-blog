import Head from 'next/head';
import Date from '../components/date';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

interface Props {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Culi's next.js blog about broad spectrum revolutions, social choice theory, conlangs, community computing, postmodern biology, and more." key="desc"/>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi I'm Culi. I'm a plant. Find out more about me <a href="https://work.culi.page/">here</a>! To see what I'm working on right now, check out my <a href="https://work.culi.page/now">now</a> page.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/b/${id}`}>
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
  );
};

const getStaticProps: GetStaticProps = async () => (
  { props: { allPostsData: getSortedPostsData() } }
);

export default Home;
export { getStaticProps };
