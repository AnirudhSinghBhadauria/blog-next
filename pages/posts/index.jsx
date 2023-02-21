import AllPosts from "components/posts/all-posts";
import { getAllPosts } from "lib/posts-util";
import React from "react";

const AllPostPage = (props) => {
  return <AllPosts post={props.post} />;
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
