import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostMetaData {
  title: string;
  date: string;
  tabs?: any[];
};

const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as PostMetaData)
    }; 
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a === b) return 0;
    else return a < b ? 1 : -1;
  });
};

const getAllPostIds = (): { params: { postId: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => (
    {
      params: { postId: fileName.replace(/\.mdx?$/, '') }
    }
  ));
};

const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content)
  ;
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    content: matterResult.content,
    ...(matterResult.data as PostMetaData)
  };
};

export { getSortedPostsData, getAllPostIds, getPostData };
