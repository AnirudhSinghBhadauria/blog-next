import AllPosts from "components/posts/all-posts";
import { getAllPosts } from "lib/posts-util";
import React, { Fragment } from "react";
import META from "components/Head/Head";

const AllPostPage = (props) => {
  const description =
    '"Browse our collection of articles, reviews, and analysis on the latest gadgets, software, and trends in the tech industry"';
  return (
    <Fragment>
      <META title="Posts" content={description} />
      <AllPosts post={props.post} />
    </Fragment>
  );
};

export default AllPostPage;

export function getStaticProps(context) {
  const allPosts = getAllPosts();
  return {
    props: {
      post: allPosts,
    },
  };
}
