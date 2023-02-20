import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  const DUMMY = {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NEXTjs",
    image: "getting-started-nextjs.avif",
    date: "2023-11-03",
    content: "# This is a first Post",
  };

  const imagePath = `/images/posts/${DUMMY.slug}/${DUMMY.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY.title} image={imagePath} />
      <ReactMarkdown>{DUMMY.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
