import { getAllPostIds } from '../lib/posts';
import { GetServerSideProps } from 'next';

interface Post {
  params: { postId: string };
};

const SITE = process.env.PROD_URL || 'https://culi-next.vercel.app/';

const generateSiteMap = (posts: Post[]): string => {

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE}</loc>
    </url>
    ${posts.map(({ params }) => `
      <url>
        <loc>${SITE}/b/${params.postId}</loc>
      </url>
    `).join('')}
  </urlset>`;
};

const SiteMap = () => {

};

const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Gather the URLs for our site
    const postIds = getAllPostIds();
  
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(postIds);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {}
    };
};

export default SiteMap;
export { getServerSideProps };
