import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
	const [postDate, setPostDate] = useState(postData.date);
	return (
	  <Layout>
		<Head>
          <title>{postData.title}</title>
		</Head>
		{postData.title}
		<br />
		{postData.id}
		<br />
		{postDate}
		<br />
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	  </Layout>
	);
  }