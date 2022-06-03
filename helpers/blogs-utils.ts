import { Blog } from '../model/Blog';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export const getBlogsFiles = () => {
  return fs.readdirSync(blogsDirectory);
};

export const getBlogData = (postIdentifier: string) => {
  const blogslug = postIdentifier.replace(/\.md$/, ''); // //removes the file extension
  const filePath = path.join(blogsDirectory, `${blogslug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const blogData: Blog = {
    slug: blogslug,
    ...data,
    content
  };

  return blogData;
};

export const getAllBlogs = () => {
  const blogFiles = getBlogsFiles();

  const allblogs = blogFiles.map((blogFile) => {
    return getBlogData(blogFile);
  });

  const sortedblogs = allblogs.sort((blogA, blogB) =>
    moment(blogA.date).isBefore(moment(blogB.date)) ? -1 : 1
  );

  return sortedblogs;
};
