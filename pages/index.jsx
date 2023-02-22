import React, { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "lib/posts-util";
import FeaturedPost from "components/home-page/FeaturedPost";
import META from "../components/Head/Head";

const HomePage = (props) => {
  const description =
    "Inkwell Chronicles is a tech blog that provides readers with informative and engaging content on the latest developments in the world of technology.";

  return (
    <Fragment>
      <META title="Home" content={description} />
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
