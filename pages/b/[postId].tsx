import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../../components/date';
import Desk from '../../components/desk/desk';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import styles from './post.module.scss';

interface Props {
  postData: {
    contentHtml: string;
    date: string;
    title: string;
    tabs?: any[];
  };
};

const Post = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
      <article className={styles.post}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>

      <Tabs tabNames={postData.tabs.map(tab => tab.title)}>
        {postData.tabs.map(tab => <Desk key={tab.title} config={tab.config} data={tab.data}/>)}
      </Tabs>

    </Layout>
  );
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.postId as string);
  return {
    props: {
      postData
    }
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export default Post;
export { getStaticProps, getStaticPaths };
