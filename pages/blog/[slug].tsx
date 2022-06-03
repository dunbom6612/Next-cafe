import React from 'react';
import PropTypes from 'prop-types';
import { GetStaticPaths, GetStaticProps, NextPageContext } from 'next';
import { getAllBlogs, getBlogData } from '../../helpers/blogs-utils';
import { Blog } from '../../model/Blog';
import { Blogs, Footer, NavBar } from '../../component/HomePage';
import Head from 'next/head';
import classes from './blog.module.css'

interface BlogDetailPageProp {
  blog: Blog;
  allBlogs: Blog[]
}

const BlogDetailPage = (props: BlogDetailPageProp) => {
  const { blog, allBlogs } = props;


  return (

    <div>
      <Head>
        <title>Next Cafe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>

      <main>
        <NavBar isDisableNavigateLink />
        <div className={classes.blog}>
          <div className={classes.content}>
            <h1 className='heading'>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        </div>
        <Blogs blogs={allBlogs} />
        <Footer />
      </main>

      <footer></footer>
    </div>



  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const allBlogs = getAllBlogs();
  
  if (!params) return {
    props: []
  }
  
  const { slug } = params;
  const data = getBlogData(slug as string);

  return {
    props: {
      blog: data,
      allBlogs: allBlogs
    }
  }
}


export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}


export default BlogDetailPage;