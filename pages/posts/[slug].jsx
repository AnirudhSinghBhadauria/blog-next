import React, { Fragment } from "react";
import META from "components/Head/Head";
import { getPostData, getPostsFiles } from "lib/posts-util";
import PostContent from "components/posts/post-detail/post-content";

const PostDetail = (props) => {
  const { postData } = props;
  const { title, excerpt } = postData;
  return (
    <Fragment>
      <META title={title} content={excerpt} />
      <PostContent post={postData} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;

  const postData = getPostData(slug);
  return {
    props: { postData },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();

  const slugs = postFiles.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default PostDetail;
