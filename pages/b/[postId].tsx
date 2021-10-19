import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostIds, getPostData } from '../../lib/posts';

import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import Desk from '../../components/desk/desk';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs';

import utilStyles from '../../styles/utils.module.css';
import styles from './post.module.scss';

interface Props {
  postData: {
    contentHtml: string;
    date: string;
    title: string;
    tabs?: any[];
  };
  contentMDX: any;
};

const BlogImage = props => {
  const style = {
    float: props.float || 'left',
    width: `calc(${props.width}px + 1rem)`
  };

  style[`margin-${style.float}`] = 0;

  return <figure 
    className={styles.image} 
    style={style}
  >
    <Image {...props}/>
    <figcaption>
      {props.description}
    </figcaption>
  </figure>;
};

const components = {
  image: BlogImage,
  special: props => <span className={styles.special}>{props.children}</span>
};

const Post = ({ postData, contentMDX }: Props) => {
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
        <MDXRemote components={components} {...contentMDX}/>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/> */}
      </article>

      <Tabs tabNames={postData.tabs.map(tab => tab.title)}>
        {postData.tabs.map(tab => <Desk key={tab.title} config={tab.config} data={tab.data}/>)}
      </Tabs>

    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.postId as string);
  const mdx = await serialize(postData.content);
  return {
    props: {
      postData,
      contentMDX: mdx
    }
  };
};

export default Post;
export { getStaticProps, getStaticPaths };
