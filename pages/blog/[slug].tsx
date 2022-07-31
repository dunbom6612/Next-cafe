import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPageContext } from 'next';
import { getAllBlogs, getBlogData } from '../../helpers/blogs-utils';
import { Blog } from '../../model/Blog';
import { Blogs, Footer, NavBar } from '../../component/HomePage';
import Head from 'next/head';
import classes from './blog.module.css'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getAbsoluteImagePath } from '../../helpers/image-utils';
import moment from 'moment';

interface BlogDetailPageProp {
  blog: Blog;
  allBlogs: Blog[]
}

const BlogDetailPage = (props: BlogDetailPageProp) => {
  const { blog, allBlogs } = props;
  const { slug, author, date, excerpt, title, content } = blog;
  const heroImgPath = getAbsoluteImagePath(`/hero.jpg`, `images/blogs/${slug}`);
  const parseDate = moment(date, 'MMMM DD,YYYY')


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>

      <main>
        <NavBar isDisableNavigateLink />
        <div className={classes.blog}>
          <Image src={heroImgPath} width={1920} height={700} layout='responsive' sizes='' alt={'coffee hero'} className={classes.hero} />
          <div className={classes.content}>
            <h1 className='heading'>{title}</h1>
            <span className={classes.author}><span className={classes.name}>{`by ${author}`}</span> <span className={classes.date}>{`Updated on ${parseDate.format('MMMM DD, YYYY')}`}</span></span>
            <ReactMarkdown >{content}</ReactMarkdown>
          </div>
        </div>
        <Blogs blogs={allBlogs} />
      </main>

      <footer></footer>
    </div>



  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { params } = context;
//   const allBlogs = getAllBlogs();

//   if (!params) return {
//     props: []
//   }

//   const { slug } = params;
//   const data = getBlogData(slug as string);

//   return {
//     props: {
//       blog: data,
//       allBlogs: allBlogs
//     }
//   }
// }


// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: 'blocking'
//   }
// }


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const allBlogs = getAllBlogs();

  if (!params) return {
    props: []
  }

  const { slug } = params;
  const data = getBlogData(slug as string);

  console.log('get blog detail data with getServerSideProps');

  return {
    props: {
      blog: data,
      allBlogs: allBlogs
    }
  }
}

export default BlogDetailPage;