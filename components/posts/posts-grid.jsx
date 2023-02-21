import React from "react";
import PostItem from "./post-item";
import classes from "./post-grid.module.css";

const PostGrid = (props) => {
     const {posts} = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem posts={post} key={post.slug}/>
      ))}
    </ul>
  );
};

export default PostGrid;
