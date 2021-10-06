import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.booger);
  return {
    props: {
      postData
    }
  };
};

const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export default Post;
export { getStaticProps, getStaticPaths };
