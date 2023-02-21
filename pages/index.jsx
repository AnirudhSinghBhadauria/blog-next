import React, { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "lib/posts-util";
import FeaturedPost from "components/home-page/FeaturedPost";

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.post} />
    </Fragment>
  );
};

export default HomePage;

export function getStaticProps(context) {
  const featuredPost = getFeaturedPosts();

  return {
    props: { post: featuredPost },
  };
}
