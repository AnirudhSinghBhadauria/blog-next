import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, date, slug, exceprt } = props.posts;

  const humanReadbleDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const href = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={href} aria-label="Post-Details">
        <div className={classes.image}>
          <Image
            priority="true"
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{humanReadbleDate}</time>
          <p>{exceprt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
